class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.16.tar.gz"
  sha256 "d86bd35738b16a72570e734dc399b748311cc74c6b8f3d5f1cee815f81b6748c"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
