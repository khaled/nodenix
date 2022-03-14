# nodenix

Example Node.js project that uses Nix for reproducible builds and development environments.  Have a look at `flake.nix` to get an idea of how this works.

The `src/main.ts` source file demonstrates shelling out to some of the tools that are listed as dependencies.  The `PATH` is set up in such a way where we ensure that we run these specific ones instead of different versions that might be in the user's `PATH`.


### Try it out:

* Launch a development shell: `nix develop github:khaled/nodenix`
  * The shell will have access to a number of tools with pinned versions, including `node`, `alejandra`, `kubectl`, `swc`, etc.
  * Alternatively you can clone this repo and run `nix develop` in the working directory.
* Build and run straight from git:  `nix run github:khaled/nodenix`.
* If you don't have `nix` installed (yet:)), you can run the above commands via `docker`, e.g.: `docker run -it --rm nixpkgs/nix-flakes nix develop github:khaled/nodenix`.
