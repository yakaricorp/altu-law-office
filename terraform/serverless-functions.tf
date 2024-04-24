locals {
  contact_send_message = {
    name       = "${var.serverless_fn_defaults.name_prefix}-contact-send-message"
    desciption = "Contact send message"
    source_dir = "../serverless/ContactSendMessage"
  }
}

locals {
  role_cloud_run_invoker = "roles/cloudfunctions.invoker"
}

# Function: ContactSendMessage

# Zip the source
data "archive_file" "contact_send_message_source" {
  type        = "zip"
  source_dir  = local.contact_send_message.source_dir
  output_path = "${path.module}/${local.contact_send_message.name}.zip"
  excludes    = ["node_modules"]
}

# Upload the source
resource "google_storage_bucket_object" "contact_send_message_source" {
  name   = "${local.contact_send_message.name}-${data.archive_file.contact_send_message_source.output_base64sha256}.zip"
  bucket = google_storage_bucket.fn_source_bucket.name
  source = data.archive_file.contact_send_message_source.output_path
}

# Create/update the function
resource "google_cloudfunctions_function" "contact_send_message" {
  name        = local.contact_send_message.name
  description = local.contact_send_message.desciption
  runtime     = var.serverless_fn_defaults.runtime

  region  = var.default_region
  project = var.project_name

  available_memory_mb          = 512
  source_archive_bucket        = google_storage_bucket.fn_source_bucket.name
  source_archive_object        = "${local.contact_send_message.name}-${data.archive_file.contact_send_message_source.output_base64sha256}.zip"
  trigger_http                 = true
  https_trigger_security_level = "SECURE_ALWAYS"
  timeout                      = var.serverless_fn_defaults.timeout
  entry_point                  = var.serverless_fn_defaults.entry_point
  service_account_email        = google_service_account.fn_service_account.email

  environment_variables = {
    TELEGRAM_API_URL = var.TELEGRAM_API_URL
    TELEGRAM_API_TOKEN = var.TELEGRAM_API_TOKEN
    TELEGRAM_CHAT_ID = var.TELEGRAM_CHAT_ID
  }
}

# Gateway authorization
resource "google_cloudfunctions_function_iam_member" "invoker" {
  project        = google_cloudfunctions_function.contact_send_message.project
  region         = google_cloudfunctions_function.contact_send_message.region
  cloud_function = google_cloudfunctions_function.contact_send_message.name

  role   = local.role_cloud_run_invoker
  member = "serviceAccount:${google_service_account.gw_service_account.email}"
}