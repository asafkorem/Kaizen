class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.19.tar.gz"
  sha256 "5b9bb1fe8f7ebbeaea111deac1d0fe107aaf06e9643fa575855c50fec877f0cf"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
