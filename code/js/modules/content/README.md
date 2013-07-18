Angular files for angular-based content script.
Some div /html/content.html injects to content page,
and application will be bootstrapped in the injected div.

*    controllers - controller for content app

It is not mandatory to use Angular for content script,
because Angular could conflicts with page framework(s).
So, you can use, for example, "pure" jquery for content injection.

But if content script some complex menu or some complex input form with UI interaction,
please consider to use Angular as a platform for your content script.