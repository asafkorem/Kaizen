#!/bin/bash

# Ensure the script stops if any command fails
set -e

# Get the version bump type from the user
echo "Enter the type of version bump (patch, minor, major):"
read bump_type
echo "Enter the release name (e.g., 'Bug fixes and improvements'):"
read release_name

# Extract the current version from package.json
current_version=$(node -p "require('./package.json').version")
echo "Current version: $current_version"

# Bump the version using npm version and semver
new_version=$(npm version $bump_type --no-git-tag-version)

# Confirm the new version
echo "New version bumped to $new_version"

# Commit the changes
git add package.json
git commit -m "Bump version to $new_version"

# Tag the release
git tag -a "$new_version" -m "$release_name"

# Push changes and tags to the repository
git push origin main
git push origin "$new_version"

# Publish the package to npm
npm publish

# Create the archive
archive_name="code-kaizen-${new_version:1}.tar.gz"
git archive -o $archive_name HEAD

# Calculate the SHA-256 checksum
sha256=$(shasum -a 256 $archive_name | awk '{ print $1 }')

# Output the checksum for Homebrew formula
echo "SHA-256 checksum: $sha256"

# Create or update the Homebrew formula
cat > Formula/code-kaizen.rb <<EOF
class CodeKaizen < Formula
  desc "A CLI utility for detecting hotspots"
  homepage "https://github.com/<your-username>/code-kaizen"
  url "https://github.com/<your-username>/code-kaizen/archive/$archive_name"
  sha256 "$sha256"
  license "MIT"

  def install
    bin.install "index.js" => "code-kaizen"
  end
end
EOF

# Push the Homebrew formula
cd Formula
git add code-kaizen.rb
git commit -m "Update to version $new_version"
git push origin main

# Notify the user of completion
echo "Version $new_version has been tagged, released, published to npm, and the Homebrew formula updated."
