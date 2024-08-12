class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.6.tar.gz"
  sha256 "5d3340757fe6c4192aa249bea4ff809c43525896ba08ddb2f1c9cc3c93602acd"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
