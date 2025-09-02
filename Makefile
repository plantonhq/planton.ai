# Makefile for Next.js project

YARN := yarn
PORT ?= 3000

.PHONY: deps install lint build run dev devs clean preview-site sync-media

deps: install

install:
	$(YARN) install

lint: install
	$(YARN) lint

build: install lint
	NODE_NO_WARNINGS=1 NEXT_TELEMETRY_DISABLED=1 $(YARN) build

# Development server
devs: run
	
# Alias for convenience
dev: run

run:
	$(YARN) dev

clean:
	rm -rf .next node_modules .yarn dist out .pnp.cjs .pnp.loader.mjs

# Build and locally preview the static export from ./out
preview-site: build
	cd out && npx --yes serve -l $(PORT)

# Sync media assets in content/media to Cloudflare R2 via rclone
# Requires rclone to be installed and configured with a remote named "r2"
# See README for setup instructions
sync-media:
	rclone sync content/media/ r2:planton-ai-media --progress --transfers 8 --checkers 16 --s3-acl private
