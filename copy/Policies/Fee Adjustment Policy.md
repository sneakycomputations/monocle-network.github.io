# Fee Adjustment Policy

This policy defines how Monocle Network may adjust network fees, what constraints apply, and how the community is involved in any changes.

---

## 1. Overview

Monocle Network charges fees to sustain infrastructure, compensate contributors, and fund community reserves. The current fee structure is:

| Fee Type | Rate |
|---|---|
| Maker | 0.1% |
| Taker | 0.2% |
| **Combined** | **0.3%** |

Monocle believes that lower network fees encourage more trades, which creates a healthier network. Fee adjustments will be made cautiously, transparently, and with community input.

Due to on-chain consolidation costs, the minimum fee is currently set at 0.0025 XMR per peer, and for no-deposit offers the seller-maker covers the fees of both roles, with a minimum fee of 0.005 XMR.

**Definitions:**

- **Contributor** - A person receiving compensation from Monocle Network for defined roles.
- **Community member** - Any peer, user, or participant in Monocle Network who is not a contributor.

---

## 2. Core Commitments

The following commitments are permanent and cannot be changed through this policy:

### 2.1 Network Fees Cap

The combined Maker and Taker fee is **not expected to ever exceed 1%** of the trade amount.

### 2.2 Transparency

All fee-related information is public:

| Information | Published? |
|---|---|
| Current fee rates | ✅ Yes |
| Network fee wallet address and view key | ✅ Yes |
| Monthly fee collection totals | ✅ Yes |
| All fee adjustment proposals and discussion | ✅ Yes, on GitHub |
| Outcome of proposals | ✅ Yes, on GitHub |

### 2.3 Community Input

No fee adjustment will be implemented without prior community discussion and a minimum 30-day notice period. Monocle will not make fee changes unilaterally or without warning.

---

## 3. Initial 12-Month Fee Freeze

Network fee levels will remain unchanged for the first 12 months of network operation. This freeze serves several purposes:

- **Predictability for early peers** - New peers can trust that fees will not change during the network's formative period
- **Data collection** - 12 months of operation provides sufficient data to assess whether fees are sustainable at current levels
- **Community building** - The freeze period allows the community to establish its voice before fee discussions begin

During the freeze period, no proposals to increase network fees will be considered.

---

## 4. When Fee Adjustments May Be Considered

After the initial 12-month freeze, fee adjustments may be proposed in the following circumstances:

### 4.1 Fee Increases

A fee increase may be proposed when:

- Network fee revenue is insufficient to cover operational costs after the 33% reserve allocation
- Contributor compensation requests consistently exceed available funds
- Network infrastructure costs have demonstrably increased
- The network has grown to a scale that requires additional operational investment

### 4.2 Fee Decreases

A fee decrease may be proposed when:

- Higher trade volume would mean the same network fees can be generated at lower rates
- Monocle is in a strong position and can afford to reduce the barrier to entry
- Competitive pressure from other Haveno networks makes lower fees necessary

### 4.3 Maker/Taker Rebalancing

The ratio between Maker and Taker fees may be adjusted when:

- There is a significant imbalance in Maker vs. Taker activity on the network
- The current ratio is not achieving its intended effect of incentivizing liquidity provision (Maker) while appropriately charging for immediate execution (Taker)
- Market conditions suggest a different ratio would better serve network health

Any rebalancing must maintain the combined fee within the current approved rate and must never cause the combined rate to exceed 1%.

---

## 5. Who Can Propose a Fee Adjustment

### 5.1 Contributor Proposals

Any contributor may propose a fee adjustment by publishing a proposal on GitHub. The proposal must include:

- The current fee rates and the proposed new rates
- A detailed justification for the change
- Network fee data supporting the proposal (e.g., fee collection trends, contributor compensation, reserve balances)
- An analysis of the expected impact on trade volume and network health
- A proposed implementation date (no sooner than 30 days after the community discussion period concludes)

### 5.2 Community Proposals

Community members may propose fee adjustments through GitHub. Community proposals must include:

- The proposed new rates
- A rationale for the change
- Any supporting data or evidence

Community proposals will be reviewed by contributors. If a proposal receives rough consensus from the contributors a decision will be made.

---

## 6. Fee Adjustment Process

### 6.1 Step 1 - Proposal Publication

The proposal is published on GitHub with all required information (Section 5.1). The proposal is also announced in all community channels (SimpleX, Matrix, forum).

### 6.2 Step 2 - Community Discussion

The community discussion period lasts a minimum of **30 days**. During this period:

- The proposal is open for comment on GitHub and the community forum
- The poster actively seeks feedback from peers and contributors
- Community members may express support, opposition, or suggest modifications
- The proposal may be revised in response to community feedback

### 6.3 Step 3 - Contributor Review and Decision

Following the discussion period, contributors review the proposal and make a decision:

- Contributors discuss the proposal and assess community feedback
- Contributors may signal their intent to accept or reject the proposal with a thumbs up or down on the GitHub issue.
- The contributor decision is published on the GitHub issue regardless of the outcome


### 6.4 Step 4 - Notice Period

If approved, a minimum **30-day notice period** begins before the fee change takes effect. During this period:

- The approved change is announced in all community channels
- The notice period gives peers time to adjust their trading strategies
- The fee change is clearly visible in the Haveno application before taking effect

### 6.5 Step 5 - Implementation

The fee change takes effect on the announced date. The new rates are reflected in:

- The Network Fees page on the website
- The Haveno application
- The GitHub repository
- This policy document (updated with new rates)

### 6.6 Timeline Summary

| Step | Duration | Total Elapsed |
|---|---|---|
| Proposal published | Day 1 | Day 1 |
| Community discussion | Minimum 30 days | Day 31 |
| Contributor review | Within 7 days | Day 38 |
| Notice period | Minimum 30 days | Day 68 |
| Implementation | On announced date | ~Day 69 |

The minimum timeline from proposal to implementation is approximately **69 days**.

---

## 7. Fee Adjustment History

| Date | Maker | Taker | Combined | Reason |
|---|---|---|---|---|
| [Date] | 0.1% | 0.2% | 0.3% | Initial fee structure (12-month freeze) |

---

## 8. Fee Transparency

Monocle will publish the following on a monthly basis:

| Metric | Published? |
|---|---|
| Total network fees collected | ✅ Yes |
| 33% allocated to community reserves | ✅ Yes |
| Contributor compensation disbursed | ✅ Yes |
| Network fee wallet balance | ✅ Yes (verifiable via view key) |

This data will be made available so that the community can assess whether fee adjustments are justified based on actual network performance.

---

## 9. Relationship to Other Policies

| Policy | Relationship |
|---|---|
| Network Fees | Defines current fee rates and the 33% reserve commitment |
| Bootstrapped Operations Policy | Defines how network fees are distributed after the 33% reserve allocation |
| Reserve Allocation Policy | Defines how the 33% reserve share is split between the three reserves |

---

## 10. Projection Models and Fee Adjustments

Projection models may show fee increases at specific intervals (e.g., Year 2, Year 3). These projections are planning tools, not commitments. Any projected fee increase must go through the full adjustment process defined in this policy before taking effect. Projected increases are not automatic and are not guaranteed.

---

## 11. Changes to This Policy

This policy may be updated periodically. Changes to the process or constraints will follow the same transparency requirements described within this policy. All changes will be published on GitHub and announced through public community channels.

---

> **Monocle believes that lower network fees mean more trades, which means a healthier network.**

---

* Last updated: November 2026
* Version: 1.0

---