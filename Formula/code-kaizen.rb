class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.18.tar.gz"
  sha256 "3f0bbc1deced337f14e56759c9388744423d5c68016878485e32e1d32fd9e3a9"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
