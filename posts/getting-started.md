# Why This Blog Exists

Most of what I know right now, I learned by breaking something and figuring out why. UzBank Shield taught me more about phishing by making me build a detector for it than any single article did. A CCNA concept doesn't fully click until I've had to explain why a network actually needs it, not just that it does. This blog is where that half of the process lives — the part where understanding something well enough to write it down clearly is a different skill than understanding it well enough to pass a quiz.

## What's actually going to show up here

Not tutorials copied from documentation, and not motivational posts about "my coding journey." Specifically:

- **Notes from projects** — the parts of building UzBank Shield that weren't obvious going in: why domain-distance checking beats blocklists, why a payment page's *behavior* matters more than its URL.
- **Concepts from coursework, explained the way I actually understood them** — CCNA, CEH, networking fundamentals, written the way I'd explain it to someone next to me, not the way a slide deck presents it.
- **Things I got wrong** — a false assumption in an early version of a detector, a networking concept I misunderstood until it broke something. The wrong turns are usually more useful to read than the clean version.

## The standard for a post landing here

If I can't point to a specific thing I built, debugged, or misunderstood and then correctly understood, it doesn't get published. No generic "top 5 cybersecurity tips" filler — plenty of that exists already, and none of it needed me specifically to write it.

First real one: [Phishing, and What Actually Catches It](#) — what UzBank Shield's detection logic taught me about the five seconds where phishing actually wins.