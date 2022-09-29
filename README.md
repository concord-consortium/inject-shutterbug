# Injecting Shutterbug

Add this line of code after the trailing `</html>` tag to inject and enable Shutterbug for an interactive:

```
<script src="//cc-project-resources.s3.amazonaws.com/inject-shutterbug/inject.js" type="text/javascript"></script>
```

Once this is added and you load the interactive into Activity Player you should see the following be logged into the console:

```
Injected shutterbug-0.5.4.js into the page.
```

This one-line script will allow us to upgrade shutterbug across all interactives by just updating the version used in `inject.js`.


## Technical Details

The `inject.js` script uses `document.write` to inject jQuery and shutterbug.js into the page along with a script tag
that enables shutterbug for the body of the page.

The contents of this [https://github.com/concord-consortium/inject-shutterbug](repo) was manually uploaded to S3 into a new
`inject-shutterbug` folder in the `cc-project-resources` bucket.  There is no automatic deployment.

To upgrade the version of shutterbug used by the `inject.js` script upload a new version (with the appropriate version
suffix in the filename) and then edit the `inject.js` script to use the new version.  The old version should be left
in the `vendor` folder.
