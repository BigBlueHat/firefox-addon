# hypothes.is Firefox Extension

Load the [hypothes.is](http://hypothes.is/) open annotation tools into the web.

## Install the latest dev copy

The `hypothesis.xpi` in this repo should be built from the latest source. Open
it in Firefox to install it.

## Building & Installing

To build this addon locally, you will need to
[install the Firefox Add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).

Then, from within this directory, run the following to test out the extension
in a standalone Firefox:

```
cfx run
```

Building an XPI version of the extension is just as simple:

```
cfx build
```
