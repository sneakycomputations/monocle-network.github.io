# Trading Rules

By trading on Monocle you assume one of two roles: you either **buy Monero** or **sell Monero**.

The rules below are **default** rules for every transaction. Offer makers sometimes specify their own additional terms for handling payments. For example, a seller using cash deposits might require a picture of a receipt torn in half with "NO REFUND" written on it. Face-to-face peers often specify terms about where and how to meet.

Maker-defined rules must still comply with the existing general trade rules. In other words, an offer maker may make an existing requirement stricter, but a custom rule may never clearly contradict the requirements of the general rules, nor the operating principles of Monocle Network. For illustrative purposes, a seller may require that the buyer use a specific alphanumeric code as the payment reason, but may never require the buyer to undergo a KYC procedure.

Make sure you're okay with an offer-maker's terms **before** you accept an offer!

Trade rules also help with the following:

- Promoting good behavior from peers
- Penalizing bad behavior from peers
- Promoting good payment accounts of peers
- Penalizing bad payment accounts of peers
- Compensating the damaged trader out of the liable peer's funds


## Common rules

### Match Your Payment Account Details with Real Data

The data you enter when creating a fiat account in Monocle must match the real data associated with that account. This is the information that will be shown to your peer during the trade, and it must match the information your peer will use or be presented with during the fiat payment process.

### No Requirement to Reply in Trader Chat

While using the available trade chat can be helpful to resolve issues directly among peers without the overhead of dispute resolution, and being communicative is a good way to ease the process for new peers, there is no obligation to reply to a peer's messages.

### Do Not Communicate with Your Peer Away from Monocle

Using email addresses, Telegram, phone numbers, and other means to contact peers is strongly discouraged. The trader chat feature built into Monocle should be used instead: not only is it more private, thanks to its p2p tor-based decentralized architecture, but the chat record can more easily be made available to arbitrators (useful in case a trader's chat messages indicate they broke a rule). This includes advertising offers to sell Monero with a way to contact you, for example a website, Telegram user name, or email.

In any case, it is forbidden to contact the peer using contacts obtained from their payment details, without their prior consent, or a compelling reason to do so.

### Be Responsive During a Dispute

Peers are expected to reply within 24 hours to arbitrators, and could lose the dispute based on unresponsiveness.

Arbitrators are expected to reply within 48 hours, but will often do so within 12 hours.

If peers are unresponsive for 48 hours they may lose their deposit.

### Do Not Change Payment Details Once Trade Is in Progress

Once the deposit transaction is published, the trade is in progress, and its terms cannot be changed. Peers agree to use the payment details specified in the trade contract.

In the event of an unexpected circumstance (e.g. hitting a bank-imposed transfer limit, or a payment institution interfering with the transaction), peers can propose alternatives through trader chat or dispute resolution, but the other peer is not required to comply, and any changes should be confirmed with an arbitrator. It is each trader's responsibility to ensure that the payment account in their offer will work before an offer is taken.


## Rules for Monero Sellers

Whether making or taking an offer, Monero sellers put all the Monero they're selling in the multisig escrow, so there are fewer rules they need to follow.

### Click `Confirm Payment` After Receiving Payment

Sellers have until the end of the maximum trade period to do so.

Account signing enables a seller with a signed payment account to sign a buyer's payment account when they successfully receive a payment. For such trades, it is recommended that the seller take as long as possible to confirm receipt of payment to reduce the chance of a chargeback.

### Do Not Confirm Payments with Mismatching Details

Payer name, account numbers, payment method, institution, and other details of a payment should match the details in the trade contract. If there are any concerns that buyer's payment details do not match (e.g. wrong name, account number etc) dispute resolution should be opened immediately, using the key combination `Ctrl-O` while on the trade panel.

> ⚠️ This is especially relevant for trades in which a signed seller receives a payment from an unsigned buyer, because confirmation of payment receipt signs the buyer's payment account. In case of such an issue, a dispute must be opened.


## Rules for Monero Buyers

> ⚠️ To avoid unexpected issues, make sure you can successfully carry out a payment with the payment method you've set up in Monocle. Examples: Zelle has weekly and monthly transfer maximums that are easy to overlook. The software will warn you about known issues, but cannot possibly keep up with all the newest banking and money transfer rules.

### Make Payment Reasonably Early within Trade Period

The buyer should complete the payment early enough for the seller to securely acknowledge receipt before the trade period is over. Waiting until the very end of the trade period to make a payment is not advised, as then the seller cannot reasonably act in time to acknowledge receipt (also, it's annoying). When the buyer makes payment towards the end of the trade period, sellers are implicitly allowed to wait a few days past the trade period end, to make sure the payment settled. The length of the trade period varies based on the selected payment method.

This is especially important for buyers with unsigned payment accounts trading with sellers with signed payment accounts. A seller will not want to confirm receipt of a payment made at the last minute from an untrusted account, so if you're a buyer looking to get your payment account signed, you should make the payment **as soon as possible**.

Some payment methods include an option to cancel a payment after you have sent it, for example Revolut and Interac e-Transfer. If you cancel payment without agreement with the seller or arbitrator you might end up being penalized for canceling the trade.

### Click Payment Started After Sending Payment

The Monero seller cannot mark the payment as received until the Monero buyer confirms that they have sent it.

Don't forget to do this!

### Leave the "Reason for Payment" Field Empty

> ⚠️ Do not add your own reference to the payment. 

Some payments offer a way to specify a reason for payment (some payment methods call it "Message" or "Information for recipient" or similar). **Leave this field BLANK.** Do not put the trade ID, any mentions of "Monocle" or "Monero" or "crypto", or any other text whatsoever.

If you are required to fill in a reason, use your account name, for example, "John Smith". Alternatively enter something non-descriptive like a dash "-". If you would prefer to use a different text please agree about this with your peer in trader chat. Remember your peer is not obligated to agree to anything, except leaving the reason blank, or using your name or dashes.

Violating this rule will likely result in a [trade penalty]().

Many banks don't like anything related to cryptocurrencies, and may take draconian measures if they sense such a transaction.

Many peers trade from personal accounts and may object to using anything that looks like it could be a commercial transaction.

### Pay Any Transaction Fees

Any fees incurred to make the payment via the agreed payment method (e.g., bank fees, money-order fees, etc) are the buyer's responsibility to pay.

The seller should receive the exact amount of the trade. The only exception to this rule is if the receiving institution imposes a fee on incoming payments — these fees are borne by the seller.


## What Happens When Things Go Wrong?

Peers should familiarize themselves with the [dispute resolution process]() so they are prepared in case conflicts emerge during a trade.

---

## Changes to This Policy

This policy may be updated periodically. All changes will be published here.

---

> **Know the rules before you trade.**

---

* Last updated: November 2026
* Version: 1.0

---