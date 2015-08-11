
Domain Token is a simple module to provide alternative domain associated tokens
for administors to send emails to users.

For example, you have three domains for one drupal installation. Now one user
registers on domain_B, and waiting for your approval. However, You main domain
site is domain_A, and you are used to manages user accounts in this main domain
site.

Now, the problem comes. If you approve this user's account in domain_A, your
drupal site will send user an account activated email. And it will tell user
"Your account at Domain_A has been activated."! Even this user registers his/
her account in Domain_B.

This module provides three domain associated tokens for site administors to use
in "admin/config/people/accounts" -- bottom 'E-mails' region.
-- [user:one-time-domain-login-url]
-- [user:site-domain-name]
-- [user:site-domain-login-url]

Example use for "Account activation" email looks like this:

Subject:
Account details for [user:name] at [user:site-domain-name] (approved)

Body:
[user:name],

Your account at [user:site-domain-name] has been activated.

You may now log in by clicking this link or copying and pasting it into your
browser:

[user:one-time-domain-login-url]

This link can only be used once to log in and will lead you to a page where
you can set your password.

After setting your password, you will be able to log in at
[user:site-domain-login-url] in the future using:

username: [user:name]
password: Your password

--  [user:site-domain-name] team