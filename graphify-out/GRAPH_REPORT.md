# Graph Report - .  (2026-04-21)

## Corpus Check
- Large corpus: 791 files · ~5,051,827 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 29 nodes · 13 edges · 2 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]

## God Nodes (most connected - your core abstractions)
1. `ensureDir()` - 2 edges
2. `toAvif()` - 2 edges
3. `ensureDir()` - 2 edges
4. `toAvif()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 2 - "Community 2"
Cohesion: 1.0
Nodes (2): ensureDir(), toAvif()

### Community 3 - "Community 3"
Cohesion: 1.0
Nodes (2): ensureDir(), toAvif()

## Knowledge Gaps
- **Thin community `Community 2`** (3 nodes): `ensureDir()`, `toAvif()`, `process-variantes-images.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (3 nodes): `ensureDir()`, `toAvif()`, `process-extintores-images.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._