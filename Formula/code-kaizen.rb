class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.15.tar.gz"
  sha256 "e9adae871eed63d4a9a869fe13d7f8a619da31bf101f96a2fe07d62857359bde"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
