# Frequently Asked Questions (FAQ)

## TABLE OF CONTENTS

| Section | Topic | Questions |
|---------|-------|-----------|
| A | General Information | Q1–Q6 |
| B | Network Fees and Costs | Q7–Q11 |
| C | Getting Started | Q12–Q16 |
| D | Trading Process | Q17–Q21 |
| E | Payment Security | Q22–Q28 |
| F | Dispute Resolution | Q29–Q34 |
| G | Penalties and Rules | Q35–Q38 |
| H | Reserves | Q39–Q42 |
| I | Software and Setup | Q43–Q48 |
| J | Privacy and Legal | Q49–Q53 |
| K | Support and Community | Q54–Q58 |

---

## SECTION A: GENERAL INFORMATION

**Q1: What is Monocle Network?**

Monocle Network is a peer-to-peer network built on the Haveno protocol. It allows peers to buy and sell Monero (XMR), Bitcoin, and other cryptocurrencies without registering an account. All trades happen directly between peers using encrypted messaging and non-custodial multisig escrow.

**Q2: How does Monocle Network differ from other peer-to-peer trading platforms?**

**TRANSPARENCY:** Monocle publishes view and transaction keys for all network fee addresses, reserve addresses, and contributor distributions. This allows anyone to independently verify network fee collections, transfers to the community reserves, and contributor compensation.

**COMMUNITY-DRIVEN:** Contributors are welcomed and compensated in XMR. Role requirements, reports, and awarded compensations are published.

**PEER PROTECTION:** 33% of all network fees are allocated to community reserves, including the Peer Security Reserve, which reimburses peers affected by protocol exploits.

**SECURITY FOCUSED:** Monocle takes peer safety very seriously. Monocle has a responsible disclosure process, a bug bounty program, and an incident response policy. While Monocle cannot make any security guarantees for the Haveno protocol itself, it implements security measures to benefit peers on Monocle Network.

**OPEN-SOURCE SUPPORT:** Monocle awards open-source sustainability grants to FOSS projects that benefit the Monero community.

**LOW NETWORK FEES:** 0.1% maker / 0.2% taker, and all fee-related information published.

**RESPONSIVE SUPPORT:** Active, competent, and free support across public community channels.

**Q3: Is anyone behind this project? Are they anonymous?**

Contributors cover roles of development, node operations, dispute resolution, and support. Monocle welcomes contributors who wish to use pseudonyms instead of real identities. Pseudonymity protects contributors from targeting by bad actors. See [Get Involved](https://) for role descriptions.

**Q4: Do you store my personal data or IP?**

No. Monocle's application routes all traffic through Tor and maintains no logs of IP, usernames, or trade metadata.

When dispute resolution is involved, arbitrator chat logs are kept for up to 12 months.

Monocle relies on GitHub and web hosting services, to which you will expose your IP.

See the [Privacy Policy](https://) for more details.

**Q5: How does Monocle Network ensure peer safety?**

Monocle Network provides private peer-to-peer communication over Tor, helping keep personal information and transaction details secure.

**Q6: Is there an onion address for the website?**

Not at present, but you can access Monocle's website via Tor Browser.

---

## SECTION B: NETWORK FEES AND COSTS

**Q7: How much are network fees?**

Current network fees are **0.3%** per trade, split as follows:

| Role | Fee |
|------|-----|
| Maker | 0.1% |
| Taker | 0.2% |

Example: On a 10 XMR trade, total fees = 0.03 XMR (maker pays 0.01, taker pays 0.02). These rates apply uniformly to all payment methods (fiat or crypto pairs).

See the [Network Fees](https://) page for more details.

**Q8: Will network fees ever increase?**

Lower network fees mean more trades, which means a healthier network. Any future change will follow the Fee Adjustment Policy: a detailed proposal published on GitHub, a 30-day community discussion period, contributor review, and a 30-day notice period before implementation.

See the [Fee Adjustment Policy](https://) for more details.

**Q9: How are fees distributed?**

**33%** of network fees is allocated to three community reserves:

- **Peer Security Reserve:** Reimburses peers affected by protocol exploits
- **Haveno Network Development Grant:** Bounties for Haveno features, bug fixes, and audits
- **Open Source Sustainability Grant:** Support for open-source projects useful to Monocle

The remaining **67%** funds network operations, including contributor compensation and infrastructure. All Monocle Network wallet balances are publicly verifiable via view keys on the [Transparency](https://) page and from within the Monocle desktop application.

**Q10: Are there any hidden costs?**

The only costs are:

- Trade fee: 0.3% combined
- Miner fees: required for blockchain transactions involving XMR, Bitcoin, and other cryptocurrencies
- Bank transfer fees: where applicable, charged by your bank

**Q11: Are there minimum network fees?**

Yes. Due to on-chain consolidation costs, the minimum fee is currently set at 0.0025 XMR per peer, and for no-deposit offers the seller (maker) covers the network fees of both roles, with a minimum fee of 0.005 XMR.

See the [Network Fees](https://) page for more details.

---

## SECTION C: GETTING STARTED

**Q12: What do I need to start trading?**

- Monocle desktop application ([download it here](https://))
- Some XMR for your security deposit and network fees, unless you find someone willing to make a no-deposit offer in Monocle's SimpleX rooms
- ~30 minutes for the initial seed phrase backup process
- A payment method to send or receive payments, such as a fiat payment account, Bitcoin, or another cryptocurrency

**Q13: Do I need any XMR before starting?**

It is recommended to have at least 0.1 XMR to cover security deposits and network fees. If you have none, you can coordinate with a seller for a no-deposit trade by asking in Monocle's SimpleX rooms.

**Q14: Do I need to verify my identity?**

No.

**Q15: Which cryptocurrencies are supported?**

- **Monero (XMR)** — the primary focus and base asset
- **Bitcoin (BTC)**
- Other cryptocurrency markets may be added as the network evolves

Check available offers within the app to see current markets.

**Q16: Which fiat currencies and payment methods are supported?**

Most fiat currencies are supported using many common payment methods from all over the world:

| Category | Methods |
|----------|---------|
| Bank Transfer | SEPA, SEPA Instant, SWIFT, ACH, Zelle, Interac e-Transfer, Sofort |
| Payment Apps | Revolut, Wise, PayPal, Cash App |
| Physical | Cash Deposits, Cash by Mail, Money Orders, In-Person |
| Digital | Gift Cards (Amazon) |

Check available offers within the application to see current liquidity.

---

## SECTION D: TRADING PROCESS

**Q17: How long does a typical trade take?**

| Payment Method | Typical Time |
|----------------|--------------|
| Bank transfers | 1 hour – 2 days |
| Gift cards | 1 hour – 1 day |
| Crypto pairs | 1 hour – 1 day |
| Cash by Mail | Up to 8 days |

**Q18: Can I cancel a trade after starting it?**

Technically yes, but penalties apply (see the [Table of Penalties](https://)). Reasons deemed "valid" include:

- The other peer violated the Trading Rules
- Mutual agreement reached via trader chat
- Unforeseen banking restriction discovered mid-trade

"Don't want to anymore" or "found cheaper offer elsewhere" are NOT valid grounds and may result in a penalty.

**Q19: What happens if the other peer stops responding?**

Open a dispute when the trade window expires. This will start the dispute resolution process. Non-responsive peers risk losing their security deposit. Buyers who have paid will receive Monero from the multisig they created with the seller.

**Q20: How are disputes resolved?**

Monocle Network has an integrated dispute resolution system. If a conflict arises, an arbitrator reviews the evidence provided by both parties and resolves the dispute fairly and transparently. See the [Dispute Resolution Policy](https://) for arbitrator standards.

**Q21: Will I be notified of new version releases?**

Yes. When a new release is available, a notification will prompt you to download it.

---

## SECTION E: PAYMENT SECURITY

**Q22: Should I write anything in the payment description?**

**LEAVE IT BLANK** whenever possible. Some payment fields force text, in which case:

- Use your account name ("John Smith")
- Or enter nothing descriptive ("-")

**NEVER** mention XMR, BTC, crypto, trade IDs, or Monocle Network. Banks monitor keywords and may freeze accounts or flag suspicious activity. See the [Trading Rules](https://) for complete guidance.

**Q23: What if my bank rejects the incoming transfer because of a suspicious reference?**

Submit proof to the arbitrator after opening a dispute. You may request compensation from your peer's security deposit for the failed trade. See the [Table of Penalties](https://).

**Q24: Is it safe to use my personal bank account?**

Most peers use personal accounts safely. However:

- Check your bank's Terms of Service regarding cryptocurrency transactions before committing
- Start with smaller trades and build experience gradually
- Never mention crypto-related terms in payment memos

**Q25: Is it acceptable to use a business bank account?**

Yes. It may also provide you with additional privacy.

**Q26: What is a security deposit?**

A security deposit is a small amount of XMR locked in multisig escrow during a trade and returned in full when the trade completes normally. If you violate the [Trading Rules](https://), part or all of your deposit may be forfeited to compensate the affected peer. See the [Table of Penalties](https://).

**Q27: Do I need a local Monero node?**

No. Monocle includes a built-in list of remote nodes you can connect to. However, running your own Monero node provides:

- Maximum privacy and independence, with no reliance on third-party nodes
- Faster initial wallet syncing
- Stronger Monero network decentralization and resilience

**Q28: What if the software crashes during a trade?**

A crash does not necessarily interrupt the trade. Restart the application and:

1. Wait until blockchain synchronization is complete.
2. Open the affected trade and check its escrow status.
3. Resume operations where needed.
4. If the trade cannot be resumed or its status is unclear, open a dispute for arbitrator assistance.

---

## SECTION F: DISPUTE RESOLUTION

**Q29: When should I open a dispute?**

Common scenarios include:

- The seller hasn't confirmed receipt within the trade window
- The seller confirmed receipt but the XMR has not been released
- The payment amount received doesn't match contract terms
- The payment came from an account not in the trade contract
- One party violated an explicit [Trading Rule](https://)

**Q30: Who decides disputes?**

Arbitrators, who are experienced contributors meeting the standards set out in the [Dispute Resolution Policy](https://).

**Q31: How fast will a dispute be resolved?**

Typical timeframe:

- Arbitrator acknowledgment: within 12 hours
- Peer response window: 48 hours during an active dispute
- Resolution: varies by case complexity and payment method (banking issues where one bank is holding funds, and pending Cash by Mail shipments, often take the longest)

Patience helps ensure accurate decisions.

**Q32: What evidence do I need to provide?**

Usual requirements:

- Proof of payment: PDF preferred over screenshots
- Bank statements: showing sender and receiver names matching the contract; unnecessary sensitive information may be redacted
- Tracking numbers: for Money Orders or Cash by Mail trades

**Q33: Can I appeal an arbitrator's decision?**

Yes, you can request that a different arbitrator conduct a fresh review.

See the [Appeals Policy](https://) for the complete process.

**Q34: What if I'm unsatisfied with the appeal outcome?**

If you remain unsatisfied, see the escalation options in the Appeals Policy. Concerns can also be raised through public community channels.

---

## SECTION G: PENALTIES AND RULES

**Q35: What happens if I violate a rule accidentally?**

Explain the situation to the counterparty, they might agree to complete the trade as normal. If that is not possible, open a dispute.

**Q36: What counts as fraud or chargeback violation?**

Definitions:

| Term | Definition |
|------|------------|
| **FRAUD** | Deliberate deception causing loss (fake receipts, manipulated screenshots) |
| **CHARGEBACK** | Reversing fiat payments AFTER receiving corresponding XMR release |

Both are categorized under the maximum penalty tier of the Table of Penalties, resulting in forfeiture of up to 100% of the security deposit (and potentially the trade amount), with forfeited funds compensating the affected peer.

**Q37: Will I be banned after a mistake?**

Single errors normally incur penalties proportional to the harm caused. Serious violations such as chargeback fraud, threats of violence, or repeated misconduct, result in maximum penalties.

**Q38: What happens to security deposits when penalties are applied?**

The penalty is calculated as a percentage of the trade amount per the [Table of Penalties](https://) and deducted from the offending peer's security deposit. Forfeited amounts will compensate the affected peer.

---

## SECTION H: RESERVES

**Q39: What is the Peer Security Reserve?**

A dedicated reserve accumulated continuously from 33% of all network fees. Its sole purpose is compensating peers affected by **protocol bugs and exploits**. It is not blanket insurance covering every conceivable scenario. Strict eligibility requirements are detailed on the [Peer Security Reserve](https://) page.

**Q40: What types of incidents are covered by the Peer Security Reserve?**

**COVERED:**

- Multisig vulnerabilities compromising locked funds
- Protocol flaws draining escrowed funds

**EXCLUDED:**

- User error
- Bank chargebacks
- Phishing and credential theft
- Hardware loss or failure

**Q41: How do I verify how much money is in the reserve?**

The reserve's address and view key are published in the [Transparency](https://) page, so incoming transactions can be independently verified. Monthly transparency reports summarize fee collections and reserve allocations. The information is also available from within the desktop application.

**Q42: What if an exploit drains more than the reserve holds?**

The safety of network peers is Monocle Network's top priority. In the event of an exploit, all XMR across the community reserves is used to compensate affected peers. If funds are insufficient, reimbursement is made pro rata, up to the total amount held across the community reserves at the time of the exploit.


---

## SECTION I: SOFTWARE AND SETUP

**Q43: How do I install the software?**

The [Download](https://) page lists binary releases alongside verification instructions. Contributors can further assist in community channels.

**Q44: Is my private key stored anywhere besides my device?**

**NEVER.** Your seed is generated on your device, and making a backup is your own responsibility. If you lose your seed phrase, your funds are lost.

**Q45: How do I back up and restore my wallet?**

**Back up:** the 25-word mnemonic can be accessed under **Account → Wallet Seed**. Write it down and store it securely.

**Restore:** navigate to **Account → Wallet Seed → Restore Wallet Seed**, enter your seed (and your restore height, if you have it), and press **Restore Wallet**. The seed can also be imported into any Monero wallet.

**Q46: How do I set Tor bridges?**

Go to **[Settings] → [Network Info]** and scroll to the bottom of the page to select **[Open Tor settings]**.

**Q47: Can I adjust miner fees?**

Miner fees cannot be adjusted for XMR. For Bitcoin or other cryptocurrency transactions, fee levels may be configurable depending on the wallet.

**Q48: Why did my XMR not arrive instantly?**

Monero transactions require 10 confirmations (typically 10–30 minutes) before they are considered settled.

---

## SECTION J: PRIVACY AND LEGAL

**Q49: Are trades anonymous?**

**RELATIVELY** speaking, yes. If everything goes well, only you and the other peer know who is involved in the trade. If you open a dispute, the arbitrator will also see the trade contract.

**Q50: Can my activity be traced?**

Monero is designed to make blockchain-based transaction tracing difficult, but it does not make you untraceable in every circumstance. Information disclosed to other parties, network-level information, compromised devices, and other operational-security failures can potentially associate activity with you.

**Q51: What countries are restricted?**

None. However, local laws and regulations may restrict cryptocurrency activity in your country.

**Q52: I live in [Country]: is trading legal?**

Consult the laws and regulations applicable to your jurisdiction. Peers are responsible for ensuring compliance with the laws of their jurisdiction.

**Q53: Does Monocle do KYC?**

No.


---

## SECTION K: SUPPORT AND COMMUNITY

**Q54: How do I contact support?**

The primary support channel is the SimpleX Support group. Additional channels include the community forum, Matrix, GitHub, Telegram, and Reddit. See the [Support](https://) page and [Support Policy](https://) for details.

**Q55: Where can I find community discussions?**

The [community forum](https://) and SimpleX groups host ongoing discussions. Join to stay informed about updates, best practices, and peer support.

**Q56: How do I become an arbitrator?**

Arbitrators are compensated contributors. Role requirements, compensation, and the process for becoming an arbitrator are published in [Get Involved](https://). New contributors start with a trial period, and pseudonymous contributions are welcome.

**Q57: How do I contribute?**

Development opportunities are posted publicly in Monocle community spaces. Contributors are compensated in XMR for completed work.

**Q58: Do you use PGP to sign releases?**

Yes.

---

> ⚠️ **Disclaimer:** This FAQ is provided for informational purposes only and does not constitute legal advice. Peers remain responsible for complying with all applicable laws and regulations in their jurisdiction. Always verify critical information against official documentation and verify software authenticity through PGP-signed releases.
