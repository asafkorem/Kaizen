class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.0.10.tar.gz"
  sha256 "b7510e45babacc0e9dc2876a4455e8c6ea050a0de82f816fc6574674e98eb93e"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
