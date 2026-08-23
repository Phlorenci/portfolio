# Why the Basics Are the Whole Game

I just finished a Networking Basics course, and the thing I keep coming back to is how much of cybersecurity is actually just knowing, precisely, how a network is supposed to behave. You can't recognize an anomaly if you don't have a firm grip on what normal looks like first.

## What the course actually covered

- **Network configuration** — the practical layer: setting up interfaces, addressing, and getting devices to actually talk to each other, not just knowing the theory of it.
- **DHCP** — how devices get an IP address automatically, and why a misconfigured or rogue DHCP server is a classic, quiet way to redirect traffic without anyone noticing immediately.
- **The OSI Model** — the seven-layer framework for how data actually moves from an application down to a physical cable and back up again on the other end. It sounds abstract until you realize almost every network problem — and almost every network *attack* — can be pinned to a specific layer.
- **IP addressing and subnet masks** — how networks are divided into manageable, controllable segments, which turns out to be as much a security boundary as it is a logistics tool.
- **Ports and protocols** — the specific doors and languages services use to communicate, and the first thing worth checking when something's exposed that shouldn't be.
- **DNS** — the system translating names into addresses, and one of the most common things attackers try to poison, spoof, or hijack, because if you control DNS, you control where "correct" traffic actually ends up.
- **Firewalls** — the rules that decide what's allowed to cross a boundary at all, which only make sense once you understand what's actually flowing through them in the first place.
- **Cisco Packet Tracer** — simulating all of the above hands-on, which is where the theory stopped being theory and started being something I could actually break and then figure out how to fix.

## Why this matters more than it sounds like it should

None of this is advanced. That's the point. Every phishing detector, every firewall rule, every anomaly detection system is built on top of these fundamentals — DNS, ports, the OSI model, addressing. If you don't know what normal DNS resolution looks like, you can't recognize DNS poisoning. If you don't understand subnetting, network segmentation as a security control is just a phrase you've memorized, not something you actually understand the value of.

Working on UzBank Shield made this concrete in a different way — a lot of what that project checks (SSL, WHOIS, domain resolution) sits directly on top of these same fundamentals. This course was the missing layer underneath something I'd already been building on top of.

## Where I'm taking this next

This is exactly the foundation CCNA is built on, and exactly why I'm treating it as a starting point rather than a box to check. The plan is to keep building on it — deeper into routing, deeper into the security implications of each layer — rather than letting it stay as one completed course on a transcript.