resource "google_service_account" "gw_service_account" {
  account_id   = "altu-gw-account"
  display_name = "Altu GW Service Account"
}

resource "google_service_account" "fn_service_account" {
  account_id   = "altu-cloud-fn-account"
  display_name = "Altu Cloud Functions Service Account"
}