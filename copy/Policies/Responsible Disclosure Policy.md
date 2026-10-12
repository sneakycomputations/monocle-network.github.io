# Responsible Disclosure Policy

Monocle Network takes security seriously. This policy describes how security vulnerabilities can be responsibly reported to Monocle, what reporters can expect in return, and how Monocle will respond.

Monocle operates on the Haveno protocol, which is free and open-source software not developed by Monocle. Vulnerabilities may exist in the Haveno software itself, in Monocle's operational infrastructure, or in the interaction between the two. All are welcome to be reported.

---

## 1. Scope

### 1.1 In Scope

The following are considered within scope for responsible disclosure:

- **Haveno protocol vulnerabilities** - Bugs, logic flaws, or exploits in the Haveno software that could compromise peer funds, privacy, or network integrity
- **Monocle infrastructure** - Vulnerabilities in Monocle-operated nodes (Monero nodes, price nodes, seed nodes), the Monocle Markets website, or any Monocle-controlled service
- **Dispute resolution process weaknesses** - Flaws that could be exploited to manipulate dispute resolution outcomes
- **Data exposure** - Any unintended exposure of peer data, network operational data, or wallet information

### 1.2 Out of Scope

The following are not eligible for bounties under this policy:

- **Monero protocol vulnerabilities** — These should be reported to the Monero project directly
- **Tor network vulnerabilities** — These should be reported to the Tor Project
- **Third-party platform vulnerabilities** — Issues with SimpleX, Matrix, GitHub, or other platforms should be reported to those services
- **Social engineering** — Phishing or impersonation attempts against Monocle contributors or peers
- **Denial of service** — General DDoS or availability attacks (though sustained or novel attacks may be considered)
- **Already known issues** — Vulnerabilities that have already been reported, disclosed, or are being addressed

---

## 2. Reporting a Vulnerability

### 2.1 How to Report

Security vulnerabilities should be reported through the following channel:

**SimpleX** — Send a message to the admins in the [Monocle Network Arbitrators SimpleX group](https://), marking it clearly as a security report

**Do not publicly disclose vulnerabilities** before Monocle has had a reasonable opportunity to respond and remediate.

### 2.2 What to Include

Reports should include:

- Description of the vulnerability and its potential impact
- Steps to reproduce the issue
- Any proof-of-concept code or evidence
- The reporter's preferred contact method
- Whether the reporter intends to claim a bounty

Reports that are clear, detailed, and reproducible will be prioritized and may receive higher compensation.

### 2.3 Anonymity

Monocle values privacy. Reporters may:

- Use a pseudonym or nym
- Communicate through Tor

No personal information is required to submit a report or receive a bounty.

---

## 3. Monocle's Commitment

When a vulnerability is responsibly reported, Monocle commits to the following:

### 3.1 Acknowledgement

- Monocle will acknowledge receipt of the report within **48 hours**
- Monocle will provide an initial assessment of severity within **7 days**

### 3.2 Remediation

- Monocle will work to understand and validate the vulnerability promptly
- If the vulnerability is in Haveno software, Monocle will coordinate with Haveno contributors and may fund a bug bounty through Haveno Network Development Grants to expedite a fix
- If the vulnerability is in Monocle's infrastructure, Monocle will remediate it directly
- Monocle will keep the reporter informed of progress at reasonable intervals

### 3.3 Confidentiality

- Monocle will not disclose the reporter's identity without their consent
- Monocle will not take legal action against reporters who adhere to this responsible disclosure policy

### 3.4 Public Disclosure

- Monocle and the reporter should agree on a timeline for public disclosure
- Monocle aims to allow public disclosure after the vulnerability has been remediated, or within **90 days** of the initial report, whichever comes first
- If Monocle is unable to remediate within 90 days, Monocle will provide the reporter with an explanation and a revised timeline

---

## 4. Bounty Framework

Monocle may compensate reporters for responsibly disclosed vulnerabilities. Bounties are funded from Peer Security Reserve or the Haveno Network Development Grants.

### 4.1 Compensation is Proportional to Severity and Trade Volume

Bounty amounts depend on two factors:

**Severity** — The potential impact of the vulnerability on peers and the network:

| Severity | Description | Examples |
|---|---|---|
| Critical | Funds at risk, privacy compromised at scale | Exploit allowing theft of peer funds, protocol flaw breaking trade security |
| High | Significant risk to peers or network integrity | Exploit enabling individual trade manipulation, arbitrator compromise |
| Medium | Limited impact, requires specific conditions | Non-critical protocol bug, infrastructure misconfiguration with limited exposure |
| Low | Minimal risk, informational | Best practice improvements, minor information leaks |

**Trade volume** - The network fee wallet is funded by network fees, which are directly tied to trade volume. Available bounty funds are therefore proportional to network activity:

- During periods of **high trade volume**, more network fees are collected, and larger bounties may be available
- During periods of **low trade volume**, bounty funds are more constrained
- Monocle is a bootstrapped network — bounty availability depends entirely on collected network fees

### 4.2 Bounty Ranges

The following ranges are indicative and subject to available funds. Bounties are denominated in USD equivalent and paid in Monero.

| Severity | Indicative Range |
|---|---|
| Critical | Up to 100% of one month's network fees |
| High | Up to 50% of one month's network fees |
| Medium | Up to 25% of one month's network fees |
| Low | Up to 10% of one month's network fees |

The [network fee]() is visible by anyone. It includes all transactions.

**These are maximum ranges, not guaranteed amounts.** Actual bounties may be lower depending on:

- Whether the vulnerability has already been reported by another party
- The quality and completeness of the report

Monocle will communicate the proposed bounty amount to the reporter before payment.

### 4.3 Bounty Process

1. Reporter discloses the vulnerability responsibly
2. Monocle validates the vulnerability and assesses severity
3. Monocle proposes a bounty amount based on severity, available funds, and current trade volume
4. Reporter accepts or declines the proposed amount
5. Bounty is paid in Monero to the reporter's provided XMR address
6. Transaction ID and secret transaction key are published for transparency, consistent with Monocle's commitment to radical transparency

---

## 5. Reporter Guidelines

To qualify for a bounty and safe harbour under this policy, reporters must:

- **Report responsibly** — Do not exploit the vulnerability beyond what is necessary to demonstrate it
- **Do not access peer data** — Do not attempt to access, extract, or view other peers' data, wallets, or transactions
- **Do not cause harm** — Avoid any action that could negatively impact peers, the network, or Monocle's infrastructure
- **Allow time for remediation** — Do not publicly disclose the vulnerability before the agreed timeline
- **Do not demand payment** — Bounties are offered at Monocle's discretion and are subject to available funds
- **Act in good faith** — Reports should be genuine attempts to improve security, not attempts to extort or manipulate

---

## 6. Monocle's Response to Exploits

If a vulnerability is exploited before or during the disclosure process, Monocle will:

1. **Pause affected operations** if necessary to protect peers
2. **Notify the community** through public community channels
3. **Assess losses** and determine the scope of affected peers
4. **Coordinate remediation** of the vulnerability
5. **Distribute compensation** from the Peer Security Reserve to affected peers, where funds are available, within 50 days public disclosure

In the event of an exploit, peer reimbursement takes priority over all other distributions from community reserves.

---

## 7. Safe Harbour

Monocle will not pursue legal action against individuals who:

- Discover and report vulnerabilities in good faith
- Make a reasonable effort to avoid privacy violations, damage, and disruption
- Adhere to this responsible disclosure policy

Monocle cannot guarantee that third parties (including law enforcement) will not take independent action. Reporters should be aware of the laws in their jurisdiction.

---

## 8. Changes to This Policy

This policy may be updated periodically. Changes will be announced through public community channels and documented in version history.

---

## 9. Contact

Security reports and questions about this policy can be directed to:

- **SimpleX** — [Link]()
- **GitHub** — [Link]()

---

> **Security through transparency, rewards through disclosure.**

---

* Last updated: November 2026
* Version: 1.0

---