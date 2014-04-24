TESTS = test/*.js
REPORTER = spec
TIMEOUT = 1000
MOCHA_OPTS =

install:
	@npm install --registry=http://registry.npm.taobao.org --disturl=http://dist.cnpmjs.org

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

.PHONY: test
