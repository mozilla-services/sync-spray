sync-spray is an add-on for Firefox that generates "random" data and
effectively stress tests the Sync component.

sync-spray works by surfing the web automatically.

Start by going to about:sync-spray. Then, enter a seed URI in the text box
and hit the button. A new window with multiple tabs will be opened and the
browser will start surfing the web automatically.

When every page has finished loading, the extension will find a random anchor
to an http URI and will follow it. If it cannot find one, it will go back
in the history.

There are many known issues, particularly with things getting stuck. This can
happen when a download is started, etc.

Once you start automatic browsing, it continues indefinitely. You can stop
automatic browsing by closing the new window. But, you probably want to exit
the entire process. Also, you probably want to run this in a new profile so it
doesn't "pollute" a profile you care about.
