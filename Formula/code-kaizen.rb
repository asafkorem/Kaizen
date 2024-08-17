class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.9.tar.gz"
  sha256 "3c37c5225ab1f89aad520416c834c9e5813f7d9ee1e010c861fd71984d6fbaf3"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
