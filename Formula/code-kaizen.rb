class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.0.tar.gz"
  sha256 "4cc5c0ab6ee748db355a78414ae44ad7b7d0218a9eb5d29f1084b2804bcc1735"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
