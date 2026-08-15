# The Five Seconds Where Phishing Wins

Phishing doesn't happen in the moment you read the email. It happens in the five seconds before that, when you're tired, or moving fast, or the message just told you your account will be locked in an hour. That's the actual attack surface — not your inbox, your attention span. Everything I built into UzBank Shield exists to buy back those five seconds.

## The domain that isn't lying, exactly

Here's a domain: `uzcard-pay.com`. Here's the real one: `uzcard.uz`. If you're scanning fast, your eyes will happily tell you these are the same word, because they *are* the same word — just with a hyphen and a foreign TLD stapled on. Typosquatting doesn't need to fool you. It needs you to not look closely enough to be fooled or not.

So the first thing UzBank Shield does isn't clever at all: it checks the domain against Uzbekistan's actual bank and payment registry and measures the *distance* between what you're looking at and what's real — one substituted letter, one added hyphen, one swapped ending. Turning "does this look right" into a number was the first real unlock, because a number doesn't get tired at 11pm the way a person does.

## What a page says about itself vs. what it does

A cloned banking page can nail the logo, the layout, even the exact shade of blue. What's much harder to fake is *behavior* — where a form actually sends your card number when you hit submit. So the tool doesn't stop at "does this URL look right." It inspects the payment page itself: does the form submit somewhere that isn't the domain it claims to be? Are the fields asking for things a real checkout never would? That was the point where this stopped being a URL checker and became something closer to a page's lie detector.

## Certificates don't have a "trust me" button, but they have a birthday

A domain registered three days ago, wrapped in a self-signed or mismatched certificate, is telling you something that no amount of good copywriting can hide: it hasn't existed long enough to be real infrastructure. Legitimate banking systems have a boring paper trail — WHOIS history, certificates from known authorities, hosting that doesn't move every week. Phishing infrastructure is disposable on purpose. It can fake a logo. It can't fake having been around.

## Why this ended up being a data problem, not a rules problem

None of these signals — domain distance, cert age, WHOIS history, page behavior, message tone — are individually conclusive. A new domain isn't automatically malicious. A slightly odd form isn't automatically theft. The actual engineering problem was combining several *individually uncertain* signals into one confidence score without either crying wolf constantly or missing the real thing. That's the part of this project that had nothing to do with cybersecurity vocabulary and everything to do with how Data Analytics Essentials trained me to think — weighting weak evidence instead of waiting for a smoking gun.

Cybersecurity Fundamentals gave me the other half: the CIA triad, the taxonomy of social engineering, the blunt fact that most breaches start with a person clicking, not a system failing. It's the difference between knowing phishing is bad and being able to say *which specific trust assumption it's exploiting* — which is the only way to actually design against it instead of just warning about it.

## What I'd tell someone about to build the same thing

Don't start by asking "does this look like phishing." Start by asking "what specific, checkable fact would be different if this were real." Domain age is checkable. Certificate issuance is checkable. Submission destination is checkable. Everything that's actually checkable can be automated — and everything that gets automated is one less thing standing between someone and those five seconds where they were