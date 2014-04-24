TESTS = test/*.js
REPORTER = spec
TIMEOUT = 20
MOCHA_OPTS =

install:
	@npm install --registry=http://r.cnpmjs.org --disturl=http://dist.cnpmjs.org

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

.PHONY: test