package tree_sitter_ldg_test

import (
	"testing"

	tree_sitter "github.com/smacker/go-tree-sitter"
	"github.com/tree-sitter/tree-sitter-ldg"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_ldg.Language())
	if language == nil {
		t.Errorf("Error loading Ldg grammar")
	}
}
