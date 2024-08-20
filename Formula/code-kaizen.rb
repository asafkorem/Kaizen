class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.22.tar.gz"
  sha256 "2224d86684633b3e5073bae6ba2b96726aef7014856ac6284a3eaa9e071b9894"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
