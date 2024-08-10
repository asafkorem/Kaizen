class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.0.9.tar.gz"
  sha256 "86c60b2fcb63333365a6385c5ab82a98808ba5d55a494314f0da19f3fcc0664d"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
