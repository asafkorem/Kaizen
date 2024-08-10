class CodeKaizen < Formula
  desc "Smart hot-spots detection in codebases"
  homepage "https://github.com/asafkorem/code-kaizen"
  url "https://github.com/asafkorem/code-kaizen/archive/archive/code-kaizen-1.0.8.tar.gz"
  sha256 "3b7dc3d926fb0ee8a97fa273d7a4eb518388f291d68233d795aa77a5c78ae142"
  license "MIT"

  def install
    bin.install "dist/index.js" => "kaizen"
  end
end
