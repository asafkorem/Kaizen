class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.25.tar.gz"
  sha256 "51a0eebc96a2ee6268ee438c1a990f6dd2a3462461e8afa8ed41f7e25582cb3e"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
