class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.21.tar.gz"
  sha256 "150cfab209601d9d5e0bdf0d9715a13aca4d81d517396eb57ddca7611f17b7e0"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
