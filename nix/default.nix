{ nixpkgsFn ? import <nixpkgs>
, system ? null }:
let nixpkgs = nixpkgsFn ({
      # extra config goes here
    } // ( if system == null then {} else { inherit system; } ));
    maven = nixpkgs.maven.override { jdk = nixpkgs.jdk11; };
in
nixpkgs.stdenv.mkDerivation {
  name = "music-reder";
  buildInputs = [ nixpkgs.dwilsonDevelopment nixpkgs.nodejs nixpkgs.yarn];
  src = "./";

  builder = builtins.toFile "builder.sh" ''
    exit 1
  '';

  shellHook = ''
    cd $src
  '';
}
