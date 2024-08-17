class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.10.tar.gz"
  sha256 "8c1f12db38dd0462476f2a6a6b1c8f789ff2624785591d04c6f56d16e5d0d175"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
