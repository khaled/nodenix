# nodenix

Example Node.js project that uses Nix for builds and to provide a reproducible development environment.  Have a look at `flake.nix` to get an idea of how this works.

The `src/main.ts` source file demonstrates shelling out to some of the tools that are listed as dependencies.  The PATH is set up in such a way where we ensure that we run these specific ones instead of different versions that might be in the user's PATH.
