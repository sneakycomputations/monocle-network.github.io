# Appeals Policy

## 1. Purpose

This policy defines the appeals process for Monocle Network dispute resolution. Appeals provide peers with a mechanism to have an arbitrator's decision reviewed by a different arbitrator, ensuring fairness and consistency in the dispute resolution process.

The appeals process exists to correct errors, maintain trust, and keep dispute resolution consistent.


## 2. Scope

This policy applies to all Monocle Network arbitrators decisions. It covers:

- Prior to an appeal
- Who may appeal
- How to file an appeal
- The appeal deposit
- The review process
- Appeal outcomes and compensation
- Recording and transparency
- Consequences for arbitrators

This policy is separate from the Dispute Resolution Policy, which governs the initial dispute resolution process.


## 3. Definitions

- **Appellant** — A peer who files an appeal against an arbitrator's decision.
- **Original arbitrator** — The arbitrator who handled the initial dispute and issued the ruling being appealed.
- **Reviewing arbitrator** — A different arbitrator who reviews the appeal.
- **Appeal deposit** — A fixed deposit of **10% of the trade amount**, paid by the appellant to the network fee address when filing an appeal.
- **Payout transaction** — The transaction that distributes funds from the trade multisig wallet, marking the completion of the trade.


## 4. Prior to an Appeal

The peer should first consult the original arbitrator, who may acknowledge a correctable decision about the case, and make restitution without an appeal being needed. Appeals should only be used by a peer once this option is exhausted.

Whether an informal resolution is recorded on GitHub is at the original arbitrator's discretion.


## 5. Who May Appeal

Either peer involved in a dispute may file an appeal, regardless of the outcome of the dispute resolution process.


## 6. Filing an Appeal

### 6.1 Timeframe

An appeal must be filed within **7 days** of the payout transaction being relayed to the Monero network. The payout transaction is the definitive point of trade completion. Appeals filed after 7 days will not be considered.

### 6.2 How to File

To file an appeal, the appellant must:

1. Contact their chosen reviewing arbitrator via SimpleX Chat within the 7-day window.
2. Pay the appeal deposit to the Monocle Network fee address and provide proof of payment.
3. Provide the trade ID, a description of why they believe the original arbitrator's decision was incorrect, and any supporting documentation.

### 6.3 Choosing a Reviewing Arbitrator

The appellant may choose any arbitrator **other than the original arbitrator** who handled their dispute.

### 6.4 What the Appeal Covers

The appeal reviews the original arbitrator's decision and process. The reviewing arbitrator assesses whether the original decision was correct given the evidence available at the time of the dispute. The appeal is not an opportunity to introduce new facts or circumstances that arose after the case was closed.

The appellant may submit any evidence they wish. However, the reviewing arbitrator's decision is based on whether the original arbitrator's decision:

- Was correct given the evidence that was available during the initial dispute
- Did not close the dispute prematurely — the original arbitrator allowed at least 48 hours for the peers to put forward their cases and provide any evidence


## 7. Appeal Deposit

### 7.1 Amount

The appeal deposit is **10%** of the trade amount, and is paid to the Monocle Network fee address.

The deposit deters frivolous appeals by imposing a financial cost on the appellant.

### 7.2 When the Appeal Deposit is Returned

The appeal deposit is returned only in the following circumstances:

- The appeal **succeeds** — the deposit is returned in full.
- The reviewing arbitrator determines the appeal **had merit** even if it failed.

If the appeal fails the deposit becomes a network fee.

### 7.3 Partial Success

If an appeal partially succeeds - for example, the original penalty was too severe but the peer was still in the wrong - the return of the deposit is at the **discretion of the reviewing arbitrator**. The reviewing arbitrator may return the deposit in full, or not, depending on the merits of the appeal.


## 8. Appeal Review Process

### 8.1 Timeline

The reviewing arbitrator has **up to 14 days** from the date the appeal is filed to reach a decision. The decision is communicated to the appellant.

### 8.2 Original Arbitrator's Role

The original arbitrator is not part of the appeal decision. Their role is limited to:

- Providing the evidence they were presented with during the initial dispute.
- Providing any rationale for the decision they made and the process they followed.

The original arbitrator does not participate in the appeal decision and does not vote on the outcome.

### 8.3 Counterparty Involvement

Whether the counterparty is involved in the appeal is at the **discretion of the reviewing arbitrator**. The reviewing arbitrator may:

- Review the appeal based solely on the appellant's submission and the initial dispute record.
- Contact the counterparty for additional context if they believe it is necessary.

### 8.4 Review Scope

The reviewing arbitrator evaluates whether the original arbitrator's decision was fair and consistent with the Dispute Resolution Policy and the Table of Penalties. They may consider:

- Whether the original arbitrator followed the correct process.
- Whether the evidence was interpreted correctly.
- If the arbitrator's decision was in line with the trading rules, table of penalties, and Dispute Resolution Policy.
- Whether the penalty was proportionate to the violation.

### 8.5 Outcome Options

The reviewing arbitrator may:

- **Uphold** the original decision — the appeal fails.
- **Overturn** the original decision — the appeal succeeds, and compensation is paid to the appellant.
- **Modify** the original decision — the appeal partially succeeds, and the reviewing arbitrator makes a new payout suggestion that adjusts the penalty or outcome.

An appeal **cannot** result in a worse outcome for the appellant or the counterparty, because, the dispute resolution payout has already been published, therefore, the worst outcome for the appellant is to lose their appeal deposit.


## 9. Compensation

### 9.1 How Compensation Works

Appeals are filed after the trade has been paid out. The multisig funds have already been distributed according to the original arbitrator's decision. Compensation for a successful appeal is therefore handled separately.

If the appeal succeeds, compensation is paid to the appellant **from the Monocle Network fee address**. The reviewing arbitrator is responsible for arranging the compensation payout. Payouts from the network fee address are processed alongside regular monthly distributions.

### 9.2 When Compensation is Paid

Compensation is sent to the appellant **within 45 days** of the appeal decision, if the network fee address is sufficiently funded, or will be rationed as balance is available. Where applicable, the appeal deposit, or a portion of it, will be refunded as an additional output, for added transparency

### 9.3 What Compensation Covers

Compensation may include:

- Return of the appellant's security deposit (or the portion that was forfeited).
- Return of the appeal deposit.
- Any additional amount the reviewing arbitrator considers appropriate given the nature of the error.

The reviewing arbitrator determines the compensation amount based on the specifics of the case.


## 10. Withdrawing an Appeal

An appeal may be withdrawn by the appellant at any time before the decision is communicated. However, **withdrawing an appeal results in the loss of the appeal deposit**. The deposit becomes a network fee and is not returned.


## 11. Recording and Transparency

### 11.1 Appeal Records

All appeal decisions are recorded on GitHub. The record includes:

- The trade ID
- The original arbitrator that was assigned
- The reviewing arbitrator that was selected
- The outcome (upheld, overturned, or modified)
- The rationale for the decision
- Whether the deposit was returned
- If any documents have been updated as a result of the appeal (e.g. trading rules or table of penalties)
- The payout transaction details for any compensation made
- The payout transaction details for any return of appeal deposit

### 11.2 Peer Privacy

No peer identifying information is published in the appeal record. Peer identities, trade details, and evidence remain confidential in accordance with the Pseudonymity and OpSec Agreement.

### 11.3 Original Arbitrator Identification

The original arbitrator is identified in the appeal record. This ensures accountability and consistency across cases.


## 12. Consequences for the Original Arbitrator

The appeals process exists to ensure dispute resolution is fair and consistent. The consequences for an original arbitrator depend on the nature of the error:

- **Procedural error** - Errors in process or interpretation are expected to occur occasionally. These are addressed through discussion among all arbitrators and a post on GitHub about the outcome and any process improvements.

- **Bias or conflict of interest** - These are more serious. If the reviewing arbitrator or the appeal record suggests bias, all arbitrators discuss the matter and determine appropriate consequences, which may include formal review under the Dispute Resolution Policy or the Contributor Code of Conduct.

The goal is improvement, not punishment. Arbitrators who acknowledge errors and participate in corrective discussion are treated in good faith. Concealing errors or refusing to engage in post-appeal review is treated more seriously.


## 13. Escalation After an Unsuccessful Appeal

If an appeal is unsuccessful, the appellant may choose to raise their case on **GitHub Discussion** for community comment. This is not a formal part of the appeals process and does not change the appeal outcome, but it provides a transparent mechanism for peers to express concerns about dispute resolution consistency.


## 14. Relationship to Other Documents

| Document | Relationship |
|---|---|
| [Dispute Resolution Policy](https://) | Defines the initial dispute resolution process that appeals review. The 48-hour minimum case duration in Section 6.4 must be reflected in the Dispute Resolution Policy. |
| [Table of Penalties](https://) | Defines penalty ranges that reviewing arbitrators reference |
| [Fee Adjustment Policy](https://) | Appeal deposits are network fees and subject to fee transparency |
| [Contributor Code of Conduct](https://) | May apply if an arbitrator's conduct during arbitration is questioned |

---

## Changes to This Policy

This policy may be updated periodically. All changes will be published here.

---

> **No decision is above review.**

---

* Last updated: November 2026
* Version: 1.0

---