class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.5.tar.gz"
  sha256 "c90c6bf4154c70007e829d93eeafaa65f61cf20db966a4f4a14dfe93d11038d7"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
