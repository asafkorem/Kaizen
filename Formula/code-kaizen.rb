class CodeKaizen < Formula
  desc "A CLI utility for detecting hotspots"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/code-kaizen-1.0.7.tar.gz"
  sha256 "fbabe28f76949bf8a14e0f1b8e17255f8fb225be910acbd85d015239841652ae"
  license "MIT"

  def install
    bin.install "index.js" => "code-kaizen"
  end
end
