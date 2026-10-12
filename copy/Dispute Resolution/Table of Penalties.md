# Table of Penalties

Penalties enforce compliance with the Monocle Network [Trading Rules](), ensuring the protocol is as safe and fair as possible, and can be applied through the **[security deposit]()** mechanism.

Penalties are calculated as a percentage of the trade amount and are deducted **primarily** from the offending peer's [security deposit](). During the [dispute resolution process](), this amount may be offered as compensation to the counterparty.

*See below regarding 100% penalties affecting the trade amount.*

**Important Notes:**

* The actual penalty applied is **up to** the maximum percentage listed below, considering the [security deposit]() amount and the arbitrator's discretion.
* 100% penalties are applied for serious violations and usually mean losing the entire [security deposit]() **and potentially the trade amount itself**.
* Penalties are **not cumulative**; if multiple violations occur, the single highest applicable penalty percentage is typically used.
* Peers experiencing issues are encouraged to communicate via [trader chat](). If mutually agreed, they can suggest a specific penalty amount to the arbitrator.

## Trade Penalties

### Penalties Applicable to Either Trader

These penalties can apply to either the XMR buyer or the XMR seller, depending on who commits the violation in a protocol using security deposits.

| Max Penalty (%) | Violation Description |
| --- | --- |
| 100 | Fraud attempt (e.g., unauthorized debiting of peer's account, source code tampering). |
| 50 | Attempting to solicit off-platform communication by including contact information in offer details (e.g., in 'additional information' field for [Cash by Mail](Cash_by_mail) or [Face-to-Face](Face-to-face_(payment_method)) offers). |
| 25 | Not responding to arbitrator inquiries within 48 hours during an active dispute resolution process. |
| 25 | Contacting trading peer outside of Monocle trader chat without prior consent or a clear, necessary reason related to completing the payment. |
| 20 | Cancelling an accepted trade without a valid reason according to [Trading Rules](Trading_rules). |
| 20 | Insisting on paying from, or requesting payment be sent to, a different account/name from those defined in the trade contract, without arbitrator's approval. |
| 10 | Requiring personal data from the counterparty beyond what is strictly necessary for the chosen payment method (e.g., demanding ID copies, proof of address unless intrinsic to the method like [Cash by Mail](Cash_by_mail)). |
| 10 | Abusive or disrespectful behavior towards trading peer or arbitrator during the dispute process. |

### Penalties Applicable Specifically to the XMR Buyer

These penalties apply only to the trader buying XMR (sending fiat, bitcoin or altcoins) in a protocol using security deposits.

| Max Penalty (%) | Violation Description |
| --- | --- |
| 100 | Successful or attempted chargeback after trade completion. |
| 50 | Using Monero or cryptocurrency related terms (e.g., "XMR", "Monocle", "bitcoin") in payment references/notes. |
| 25 | Paying from an account with a significantly different name (indicating a likely third party). *Note: Seller may cancel trade without penalty.* |
| 20 | Payment credited 72+ hours after the trade period ends. |
| 20 | Using an unagreed payment reference/memo, including potentially problematic neutral terms or the Trade ID itself. |
| 15 | Payment credited 48-72 hours late. |
| 15 | Paying from an account with the correct name but different account details (e.g., wrong bank/account number) from what was specified in trade contract. *Note: Seller may cancel trade without penalty.* |
| 10 | Payment credited 24-48 hours late. |
| 10 | Using a similar but incorrect payment method that causes issues (e.g., sending via standard SWIFT when SEPA was agreed). |
| 10 | Paying the wrong fiat amount. *Note: buyer usually has the option to correct the amount within the trade window. Seller may cancel trade without penalty if not corrected promptly.* |
| 10 | Delayed altcoin payment due to buyer choosing an extremely low network fee. *Note: Penalty may be reduced if buyer uses transaction acceleration techniques (RBF, CPFP).* |
| 5 | Payment credited up to 24 hours late. |

### Penalties Applicable Specifically to the XMR Seller

These penalties apply only to the trader selling XMR (receiving fiat, bitcoin or altcoins) in a protocol using security deposits.

| Max Penalty (%) | Violation Description |
| --- | --- |
| 25 | Incorrect data in fiat account setup, used as-is by the buyer, causes buyer's bank to intervene (penalty amount depends on the nature of the bank's intervention). |
| 15 | BTC is released significantly outside the expected timeframe after payment confirmation, without valid reason. |

---

## Changes to This Policy

This policy may be updated periodically. All changes will be published here.

---

> **Understand these before you trade**

---

* Last updated: November 2026
* Version: 1.0

---