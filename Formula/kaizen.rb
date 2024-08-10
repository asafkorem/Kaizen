class Kaizen < Formula
  desc "A simple CLI utility that prints Hello, World!"
  homepage "https://github.com/<your-username>/kaizen"
  url "https://github.com/<your-username>/kaizen/archive/v1.0.0.tar.gz"
  sha256 "<SHA256-checksum>"
  license "MIT"

  def install
    bin.install "index.js" => "kaizen"
  end
end
