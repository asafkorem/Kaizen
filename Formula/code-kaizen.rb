class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.1.4.tar.gz"
  sha256 "6bd2313bdf1077c2ba84bce4dd0a08d91c1f02575648d91d8ffc2af65339690f"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
