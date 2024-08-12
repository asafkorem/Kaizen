class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.2.tar.gz"
  sha256 "88a4cabdde0d98f9f2f32a43539783527b3554ae9262a52f6a411341278850b6"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
