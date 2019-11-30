let source = rec {
        owner = "NxOS";
        repo = "nipkgs-channels";
        rev = "259a67ca2217f3cd14a1549b1fd44d8273a9a94f";
        sha256 = "1111111111111111111111111111111111111111111111111111";
        name = "${repo}-${rev}";
      };
in
import ((import <nixpkgs> {}).fetchFromGitHub source)
