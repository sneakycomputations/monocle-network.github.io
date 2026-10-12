# Reserve Allocation Policy

This policy defines how Monocle Network distributes the 33% of collected network fees allocated to community reserves, how allocation decisions are made, and how adjustments are proposed and implemented.

---

## 1. Overview

Monocle distributes 33% of all collected network fees to three community reserves before any other distributions:

| Reserve | Purpose |
|---|---|
| Peer Security Reserve | Peer reimbursement in the event of an exploit |
| Haveno Network Development Grant | Bug bounties and developer grants for the Haveno project |
| Open-Source Sustainability Grant | Grants to open-source projects vital to the ecosystem |

The remaining 67% of network fees funds contributor compensation and network maintainer allocations, as described in the [Bootstrapped Operations Policy]().

---

## 2. Starting Allocation

The 33% reserved for community reserves is initially split as follows:

| Reserve | Share of Reserve Allocation | Effective Share of Total Network Fees |
|---|---|---|
| Peer Security Reserve | 50% | 16.5% |
| Haveno Network Development Grant | 35% | 11.55% |
| Open-Source Sustainability Grant | 15% | 4.95% |
| **Total** | **100%** | **33%** |

### 2.1 Rationale

- **Peer Security Reserve receives the largest share** — Peer protection is Monocle's top priority. A meaningful reserve must be built before significant trade volume occurs, as an exploit early in the network's life could be devastating to peer trust
- **Haveno Network Development Grant receive the second largest share** — Monocle depends on Haveno's continued development. Funding bounties ensures the software improves and vulnerabilities are addressed proactively
- **Open-Source Sustainability Grants receive the third share** — Giving back to the ecosystem is important but carries less urgency than peer protection and core development

---

## 3. Allocation Frequency

Network fees are distributed to the three reserves on a **monthly cycle**, aligned with Monocle's compensation cycle:

1. Network fees collected during a given month are totalled
2. 33% of the total is calculated
3. The 33% is split according to the current allocation ratios
4. Transfers are made to each reserve wallet
5. Transaction IDs and secret transaction keys are published for community verification

During the initial bootstrapping phase, if the total 33% allocation for a month is less than 1 XMR, the distribution may be deferred to the following month.

---

## 4. Peer Security Reserve Priority

The Peer Security Reserve takes **absolute priority** over the other two reserves in the event of an exploit:

### 4.1 Exploit Event

If an exploit occurs:

1. All remaining balance in the Haveno Network Development Grant and Open-Source Sustainability Grant wallets will be redirected to the Peer Security Reserve
2. Future monthly allocations are temporarily redirected — 100% of the 33% reserve allocation goes to the Peer Security Reserve until peer reimbursement is complete or the situation is resolved
3. The community is notified through all public channels
4. A post-incident review is published on GitHub

### 4.2 Insufficient Reserves

If the Peer Security Reserve balance is insufficient to fully reimburse affected peers:

- Peers are reimbursed on a **pro-rata basis** — each affected peer receives an equal proportion of the available funds relative to their loss
- Monocle does not guarantee full reimbursement — the Peer Security Reserve is limited to the accumulated funds at the time of exploit

---

## 5. Adjusting the Allocation

The starting allocation may be adjusted to respond to emerging needs. Adjustments are not made lightly. Consistency and predictability are important for community trust.

### 5.1 What Triggers an Adjustment Review

An allocation review may be initiated by:

- A contributor request
- A community request supported by meaningful discussion in Monocle's community spaces
- A significant change in network circumstances, such as:
  - The Peer Security Reserve reaching a sufficient balance relative to typical trade volume
  - A critical Haveno vulnerability requiring urgent bounty funding
  - Sustained low trade volume making the current split impractical
  - The network reaching a mature operational state where security reserves are well-funded

### 5.2 Adjustment Constraints

Any proposed allocation must satisfy the following constraints:

| Constraint | Requirement |
|---|---|
| Minimum Peer Security Reserve share | **No less than 30%** of the reserve allocation (9.9% of total network fees) |
| Minimum Haveno Development share | **No less than 15%** of the reserve allocation (4.95% of total network fees) |
| Minimum Open-Source Sustainability share | **No less than 10%** of the reserve allocation (3.3% of total network fees) |
| Total allocation | **Must always equal 100%** of the 33% reserve share |
| Maximum single reserve share | **No more than 70%** of the reserve allocation (23.1% of total network fees) |

### 5.3 Adjustment Process

1. **Proposal** — A contributor or community member publishes a proposal on the Monocle community forum or GitHub, including:
   - The proposed new allocation ratios
   - The justification for the change
   - An analysis of the impact on each reserve
2. **Community discussion** — The proposal is discussed publicly for a minimum of **30 days**
3. **Contributor decision** — Following community discussion, contributors decide whether to implement the change. Changes require rough consensus among contributors
4. **Announcement** — If approved, the change is announced through all community channels. Changes will be implemented immediately
5. **Documentation** — The change is recorded in the allocation history table (Section 7) and this policy is updated

---

## 6. Transparency and Verification

All reserve allocations are transparent and independently verifiable. Published information includes:

* Current allocation ratios
* Monthly distribution amounts
* Reserve wallet addresses and view keys
* Transaction IDs and secret transaction keys
* Allocation changes and history

---

## 7. Allocation History

| Date | Peer Security Reserve | Haveno Development Grants | Open-Source Sustainability Grants | Reason |
|---|---|---|---|---|
| [Date] | 50% | 35% | 15% | Initial allocation |

---

## 8. Relationship to Other Policies

| Policy | Relationship |
|---|---|
| [Bootstrapped Operations Policy]() | Defines the 33% reserve allocation as a fixed priority before contributor compensation |
| [Community Reserves]() | Describes the purpose and transparency commitments for each reserve |
| [Network Fees]() | Defines how network fees are collected 
| [Responsible Disclosure Policy]() | May trigger bounty payments from Haveno Network Development Grant |

---

## 9. Changes to This Policy

This policy may be updated periodically. Changes to the allocation ratios will follow the process described in Section 5. All changes will be published here and announced through public community channels.

---

> **Every reserve has a view key attached. Don't trust, verify.**

---

* Last updated: November 2026
* Version: 1.0

---