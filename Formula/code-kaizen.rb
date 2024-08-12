class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.1.tar.gz"
  sha256 "aa73e5b514b03de69957159fd81d28d75b90293a1f88ebcf85303ee470c50923"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
