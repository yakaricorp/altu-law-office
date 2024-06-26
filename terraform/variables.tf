variable "project_name" {
  type        = string
  description = "GCP project name"
  sensitive   = true
}

variable "default_region" {
  type        = string
  description = "GCP default region for resources"
  sensitive   = true
}

variable "gw_default_region" {
  type        = string
  description = "GCP default region for resources"
  sensitive   = true
}

variable "serverless_fn_defaults" {
  type = object({
    name_prefix = string
    runtime     = string
    entry_point = string
    timeout     = number
  })
  description = "Some default config values to use provisioning GCP functions"
  default = {
    entry_point = "handler"
    runtime     = "nodejs20"
    name_prefix = "altu-fn"
    timeout     = 60
  }
}


# Function's environment variables
variable "TELEGRAM_API_URL" {
  type = string
}

variable "TELEGRAM_API_TOKEN" {
  type      = string
  sensitive = true
}

variable "TELEGRAM_CHAT_ID" {
  type      = string
  sensitive = true
}

variable "MAIL_SERVICE_HOST" {
  type = string
}

variable "MAIL_SERVICE_PORT" {
  type = number
}

variable "MAIL_SERVICE_SENDER_ADDRESS" {
  type = string
}

variable "MAIL_SERVICE_RECEIVER_ADDRESS" {
  type = string
}
variable "MAIL_SERVICE_CLIENT_ID" {
  type      = string
  sensitive = true
}

variable "MAIL_SERVICE_CLIENT_SECRET" {
  type      = string
  sensitive = true
}

variable "MAIL_SERVICE_ACCESS_TOKEN" {
  type      = string
  sensitive = true
}

variable "MAIL_SERVICE_REFRESH_TOKEN" {
  type      = string
  sensitive = true
}

variable "MAIL_SERVICE_TOKEN_EXPIRY" {
  type = number
}