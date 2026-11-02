# HostGraph non-simulated production data policy

**Production default: `LIVE`**. Unset, invalid, or misspelled `VITE_HOSTGRAPH_MODE` settings are treated as `LIVE`. `DEMO` must be explicitly configured by an operator for isolated internal fixture testing only; never set `DEMO` on a customer-facing deployment.

## Data provenance contract

- No synthetic Boston restaurant fleet values may be presented as revenue, savings, invoices, negotiated credits, or live operating results.
- Frontend `useHostGraphData` starts `LIVE` without loaded fixtures. A successful schema-validated API read may be presented as a real source response, subject to the API's own provenance.
- When the API fails before any live response, the view must be unavailable rather than falling back to fixtures. A degraded view may display only the last actual response fetched in the same session and must label it stale.
- An API response itself is not proof of independently verified supplier invoices or recovered cash. The underlying source records, contracts, and corrections require human reconciliation.

## Independent deployment gate

Before deployment, the operator must independently verify with real, authorized invoice samples:

1. Backend routes respond with valid schemas from persistent storage.
2. Cross-tenant access is denied.
3. Price-variance arithmetic matches line-level invoice and contracted values.
4. No amounts appear on first boot without authorized source data.
5. Disconnecting the API produces an unavailable/degraded state, never the fixture fleet.
6. Mobile navigation and all active views undergo real-device inspection.
7. Restoring backups and a clean-room migration work.
8. Stripe payment settlement and entitlements are verified separately if this product is sold as SaaS.

Changing this default does **not** establish these production acceptance gates. This branch is deliberately not a deployment authorization.
