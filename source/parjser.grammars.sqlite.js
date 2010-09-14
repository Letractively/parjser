/*
    Copyright Roland Bouman
    Roland.Bouman@gmail.com
    http://rpbouman.blogspot.com/
 
    This file is part of parjser: http://code.google.com/p/parjser

    parjser is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as
    published by the Free Software Foundation, either version 3
    of the License, or (at your option) any later version.

    parjser is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Lesser Public License for more details.

    You should have received a copy of the GNU Lesser General Public
    License along with parjser.  If not, see <http://www.gnu.org/licenses/>.
*/

(function(){

parjser.grammars.sqlite = {
    ignoreCase: true,
    ignoreTokens: {whitespace: true},
    tokens: {
        whitespace: /\s+|--[^\n]*\n|\/\*([^*]|\*(?!\/))*\*\//,
        ABORT: /\bABORT\b/, ACTION: /\bACTION\b/, ADD: /\bADD\b/,
        AFTER: /\bAFTER\b/, ALL: /\bALL\b/, ALTER: /\bALTER\b/,
        ANALYZE: /\bANALYZE\b/, AND: /\bAND\b/, AS: /\bAS\b/,
        ASC: /\bASC\b/, ATTACH: /\bATTACH\b/, AUTOINCREMENT: /\bAUTOINCREMENT\b/,
        BEFORE: /\bBEFORE\b/, BEGIN: /\bBEGIN\b/, BETWEEN: /\bBETWEEN\b/, BY: /\bBY\b/,
        CASCADE: /\bCASCADE\b/, CASE: /\bCASE\b/, CAST: /\bCAST\b/, CHECK: /\bCHECK\b/,
        COLLATE: /\bCOLLATE\b/, COLUMN: /\bCOLUMN\b/, COMMIT: /\bCOMMIT\b/,
        CONFLICT: /\bCONFLICT\b/, CONSTRAINT: /\bCONSTRAINT\b/, CREATE: /\bCREATE\b/,
        CROSS: /\bCROSS\b/, CURRENT_DATE: /\bCURRENT_DATE\b/,
        CURRENT_TIME: /\bCURRENT_TIME\b/, CURRENT_TIMESTAMP: /\bCURRENT_TIMESTAMP\b/,
        DATABASE: /\bDATABASE\b/, DEFAULT: /\bDEFAULT\b/, DEFERRABLE: /\bDEFERRABLE\b/,
        DEFERRED: /\bDEFERRED\b/, DELETE: /\bDELETE\b/, DESC: /\bDESC\b/,
        DETACH: /\bDETACH\b/, DISTINCT: /\bDISTINCT\b/, DROP: /\bDROP\b/,
        EACH: /\bEACH\b/, ELSE: /\bELSE\b/, END: /\bEND\b/, ESCAPE: /\bESCAPE\b/,
        EXCEPT: /\bEXCEPT\b/, EXCLUSIVE: /\bEXCLUSIVE\b/, EXISTS: /\bEXISTS\b/,
        EXPLAIN: /\bEXPLAIN\b/, FAIL: /\bFAIL\b/, FOR: /\bFOR\b/,
        FOREIGN: /\bFOREIGN\b/, FROM: /\bFROM\b/, FULL: /\bFULL\b/,
        GLOB: /\bGLOB\b/, GROUP: /\bGROUP\b/, HAVING: /\bHAVING\b/,
        IF: /\bIF\b/, IGNORE: /\bIGNORE\b/, IMMEDIATE: /\bIMMEDIATE\b/,
        IN: /\bIN\b/, INDEX: /\bINDEX\b/, INDEXED: /\bINDEXED\b/,
        INITIALLY: /\bINITIALLY\b/, INNER: /\bINNER\b/, INSERT: /\bINSERT\b/,
        INSTEAD: /\bINSTEAD\b/, INTERSECT: /\bINTERSECT\b/, INTO: /\bINTO\b/,
        IS: /\bIS\b/, ISNULL: /\bISNULL\b/, JOIN: /\bJOIN\b/, KEY: /\bKEY\b/,
        LEFT: /\bLEFT\b/, LIKE: /\bLIKE\b/, LIMIT: /\bLIMIT\b/, MATCH: /\bMATCH\b/,
        NATURAL: /\bNATURAL\b/, NO: /\bNO\b/, NOT: /\bNOT\b/, NOTNULL: /\bNOTNULL\b/,
        NULL: /\bNULL\b/, OF: /\bOF\b/, OFFSET: /\bOFFSET\b/, ON: /\bON\b/, OR: /\bOR\b/,
        ORDER: /\bORDER\b/, OUTER: /\bOUTER\b/, PLAN: /\bPLAN\b/, PRAGMA: /\bPRAGMA\b/,
        PRIMARY: /\bPRIMARY\b/, QUERY: /\bQUERY\b/, RAISE: /\bRAISE\b/,
        REFERENCES: /\bREFERENCES\b/, REGEXP: /\bREGEXP\b/, REINDEX: /\bREINDEX\b/,
        RELEASE: /\bRELEASE\b/, RENAME: /\bRENAME\b/, REPLACE: /\bREPLACE\b/,
        RESTRICT: /\bRESTRICT\b/, RIGHT: /\bRIGHT\b/, ROLLBACK: /\bROLLBACK\b/,
        ROW: /\bROW\b/, SAVEPOINT: /\bSAVEPOINT\b/, SELECT: /\bSELECT\b/,
        SET: /\bSET\b/, TABLE: /\bTABLE\b/, TEMP: /\bTEMP\b/,
        TEMPORARY: /\bTEMPORARY\b/, THEN: /\bTHEN\b/, TO: /\bTO\b/,
        TRANSACTION: /\bTRANSACTION\b/, TRIGGER: /\bTRIGGER\b/, UNION: /\bUNION\b/,
        UNIQUE: /\bUNIQUE\b/, UPDATE: /\bUPDATE\b/, USING: /\bUSING\b/,
        VACUUM: /\bVACUUM\b/, VALUES: /\bVALUES\b/, VIEW: /\bVIEW\b/,
        VIRTUAL: /\bVIRTUAL\b/, WHEN: /\bWHEN\b/, WHERE: /\bWHERE\b/,
        string: /[xX]?'([^']|'')*'/,
        identifier: /[a-z_][\w_]*|"([^"]|"")*"|`([^`]|``)*`|\[[^\]]\]/,
        lparen: /\(/,
        rparen: /\)/,
        comma: /,/,
        dot: /\./,
        semi: /;/,
        asterisk: /\*/,
        slash: /\//,
        mod: /%/,
        number: /[\-+]?\d*\.?\d+([eE][\-+]?\d+)?/,
        equalsequals: /\=\=/,
        notequals: /!=/,
        ltgt: /<>/,
        lteq: /<=/,
        gteq: />=/,
        lshift: /<</,
        rshift: />>/,
        lt: /</,
        gt: />/,
        concat: /\|\|/,
        bitand: /&/,
        bitor: /\|/,
        plus: /\+/,
        minus: /-/,
        equals: /\=/
    },
    rules: {
        atom: ["|",
            "number",
            "string",
            "NULL",
            "CURRENT_TIMESTAMP",
            "CURRENT_TIME",
            "CURRENT_DATE",
            "function_call",
            "object_name",
            "case_expr",
            ["lparen", "expr", "rparen"]
        ],
        function_call: ["identifier", "parenthesized_expr_list"],
        case_expr: ["CASE", "expr", "?", ["WHEN", "expr", "THEN", "expr"], "+", ["ELSE", "expr"], "?", "END"],
        expr: ["or_operand", ["OR", "or_operand"], "*"],
        or_operand: ["and_operand", ["AND", "and_operand"],"*"],
        and_operand: ["eq_operand", ["eq_operator", "eq_operand"], "?"],
        eq_operator: ["|",
            "equals", "equalsequals", "notequals", "ltgt", ["IS","NOT", "?"]
        ],
        eq_operand: ["neq_operand", ["neq_operator", "neq_operand"], "?"],
        neq_operand: ["bit_operand", ["bit_operator", "bit_operand"],"*"],
        neq_operator: ["|", "lt", "lteq", "gt", "gteq"],
        bit_operand: ["plus_operand", ["plus_operator", "plus_operand"], "*"],
        bit_operator: ["|", "lshift", "rshift", "bitand", "bitor"],
        plus_operator: ["|", "plus", "minus"],
        plus_operand: ["mul_operand", ["mul_operator", "mul_operand"], "*"],
        string_concat: ["atom", ["concat", "atom"], "+"],
        mul_operand: ["|", "string_concat", "atom"],
        mul_operator: ["|", "asterisk", "slash", "mod"],
        object_name: [["identifier", "dot"], "?", "identifier"], 
        collate_clause: ["COLLATE", "identifier"],
        asc_or_desc: ["|","ASC", "DESC"],
        index_column_def: [
            "identifier",
            "collate_clause", "?",
            "asc_or_desc", "?"
        ],
        if_not_exists: ["IF", "NOT", "EXISTS"],
        if_exists: ["IF", "EXISTS"],
        column_defs: ["column_def", ["comma", "column_def"],"*"],
        datatype: [
            "identifier",
            ["lparen", ["number"], ["comma", "number"],"?", "rparen"], "?"
        ],
        conflict_action: ["|", "ROLLBACK", "ABORT", "FAIL", "IGNORE", "REPLACE"],
        or_conflict_action: ["OR", "conflict_action"],
        conflict_clause: ["ON", "CONFLICT", "conflict_action"],
        column_constraint: [
            ["CONSTRAINT", "identifier"], "?",
            ["|",
                [   "PRIMARY", "KEY",
                    "asc_or_desc", "?",
                    "conflict_clause", "?",
                    "AUTOINCREMENT", "?"
                ],
                ["NOT", "NULL", "conflict_clause", "?"],
                ["UNIQUE", "conflict_clause", "?"],
                ["CHECK", "lparen", "expr", "rparen"],
                "collate_clause",
                ["DEFAULT", "expr"],
                "references_clause"
            ]
        ],
        column_def: ["identifier", "datatype", "?", "column_constraint", "*"],
        column_list: ["identifier", ["comma", "identifier"], "*"],
        parenthesized_column_list: ["lparen", "column_list", "rparen"],
        references_clause: [
            "REFERENCES", "object_name",
            "parenthesized_column_list", "?",
            ["|",
                ["ON",
                    ["|", "DELETE", "UPDATE"],
                    ["|",
                        ["SET", "NULL"],
                        ["SET", "DEFAULT"],
                        "CASCADE",
                        "RESTRICT",
                        ["NO", "ACTION"]
                    ]
                ],
                ["MATCH", "identifier"]
            ], "*",
            ["NOT", "?", "DEFERRABLE",
                ["INITIALLY", ["|", "DEFERRED", "IMMEDIATE"]], "?"
            ], "?"
        ],
        table_constraints: [["comma", "table_constraint"], "*"],
        table_definition: ["|",
            ["lparen", "column_defs", "table_constraints", "rparen"],
            ["AS", "select_stmt"]
        ],
        table_constraint: [
            ["CONSTRAINT", "identifier"], "?",
            ["|",
                [
                    ["|", ["PRIMARY","KEY"], "UNIQUE"],
                    "parenthesized_column_list",
                    "conflict_clause", "?"
                ],
                ["CHECK", "lparen", "expr", "rparen"],
                ["FOREIGN", "KEY", "parenthesized_column_list", "references_clause"]
            ]
        ],
        temp: ["|", "TEMP", "TEMPORARY"],
        having_clause: ["HAVING", "expr"],
        where_clause: ["WHERE", "expr"],
        from_clause: ["FROM", "join_source"],
        alias: ["AS", "?", "identifier"],
        subquery: ["lparen", "select_stmt", "rparen"],
        table_index_clause: ["|",
            ["INDEXED", "BY", "identifier"],
            ["NOT", "INDEXED"]
        ],
        single_source: ["|",
            ["object_name", "alias", "?", "table_index_clause","?"],
            ["subquery", "alias", "?"],
            ["lparen", "join_source", "rparen"]
        ],
        join_constraint: ["|",
            ["ON", "expr"],
            ["USING", "parenthesized_column_list"]
        ],
        join_operator: ["|",
            "comma",
            [
                ["NATURAL", "?", ["|",
                    "INNER", "CROSS",
                    ["LEFT", "?", "OUTER", "?"]
                    ]
                ], "?",
                "JOIN"
            ]
        ],
        join_source: ["single_source",
            ["join_operator", "single_source", "join_constraint", "?"], "*"
        ],
        group_by_clause: ["GROUP", "BY", "order_by_list", "having_clause", "?"],
        select_column: ["|",
            [["identifier", "dot"],"?", "asterisk"],
            ["expr", "alias", "?"]
        ],
        select_list: ["select_column", ["comma", "select_column"], "*"],
        select_core: ["SELECT",
                        ["|", "ALL", "DISTINCT"], "?",
                        "select_list", 
                        "from_clause", "?",
                        "where_clause", "?",
                        "group_by_clause", "?"
                    ],
        compound_operator: ["|",
            ["UNION", "ALL", "?"],
            "INTERSECT", "EXCEPT"
        ],
        order_by_column: ["expr", "asc_or_desc", "?"],
        order_by_list: ["order_by_column", ["comma", "order_by_column"], "*"],
        order_by_clause: ["ORDER", "BY", "order_by_list"],
        limit_clause: [
            "LIMIT", "number", [
                ["|", "comma", "OFFSET"],
                "number"
            ], "?"
        ],
        pragma_value:["|", "number", "identifier", "string"],
        expr_list: ["expr", ["comma", "expr"], "*"],
        parenthesized_expr_list: ["lparen", "expr_list", "?", "rparen"],
        insert_source_and_target: [
            "INTO", "object_name", ["|",
                ["parenthesized_column_list", "?", ["|",
                    ["VALUES", "parenthesized_expr_list"],
                    "select_stmt"
                ]],
                ["DEFAULT", "VALUES"]
            ]
        ],
        qualified_table_name: ["object_name", "table_index_clause", "?"],
        order_by_limit_clause: ["order_by_clause", "limit_clause"],
        column_assignment: ["identifier", "equals", "expr"],
        column_assignments: [
            "column_assignment",
            ["comma", "column_assignment"], "*"
        ],
        sqlite: ["stmt", ["semi", "stmt"], "*", "semi", "?"],
        stmt: [["EXPLAIN", ["QUERY", "PLAN"], "?"], "?", "real_stmt"],
        real_stmt: ["|",
            "alter_table_stmt",
            "analyze_stmt",
            "attach_stmt",
            "begin_stmt",
            "commit_stmt",
            "create_index_stmt",
            "create_table_stmt",
            "create_trigger_stmt",
            "create_view_stmt",
            "create_virtual_table_stmt",
            "delete_stmt",
            "detach_stmt",
            "drop_index_stmt",
            "drop_table_stmt",
            "drop_trigger_stmt",
            "drop_view_stmt",
            "insert_stmt",
            "pragma_stmt",
            "reindex_stmt",
            "release_stmt",
            "replace_stmt",
            "rollback_stmt",
            "savepoint_stmt",
            "select_stmt",
            "update_stmt",
            "vacuum_stmt"
        ],
        alter_table_stmt: [
            "ALTER", "TABLE", "object_name", ["|",
                ["RENAME", "TO", "identifier"],
                ["ADD", "COLUMN", "?", "column_def"]
            ]
        ],
        analyze_stmt: ["ANALYZE", "object_name"],
        attach_stmt: ["ATTACH", "DATABASE", "?", "string", "alias"],
        begin_stmt: [
            "BEGIN",
            ["|",
                "DEFERRED",
                "IMMEDIATE",
                "EXCLUSIVE"
            ], "TRANSACTION"
        ],
        commit_stmt: [
            ["|", "COMMIT", "END"],
            "TRANSACTION", "?"
        ],
        create_index_stmt: [
            "CREATE",
            "UNIQUE", "?",
            "INDEX", "if_not_exists", "?", "object_name",
            "ON", "identifier",
            "lparen", ["index_column_def", ["comma", "index_column_def"], "*"], "rparen"
        ],
        create_table_stmt: [
            "CREATE", "temp", "?", "TABLE",
            "if_not_exists", "?", "object_name",
            "table_definition"
        ],
        create_trigger_stmt: [
            "CREATE", "temp", "?", "TRIGGER",
            "if_not_exists", "?", "object_name",
            ["|", "BEFORE", "AFTER", ["INSTEAD", "OF"]], "?",
            ["|",
                "DELETE",
                "INSERT",
                ["UPDATE", ["OF", "column_list"], "?"]
            ],
            "ON", "identifier",
            ["FOR", "EACH", "ROW"], "?",
            ["WHEN", "expr"],"?",
            "BEGIN",
            [["|",
                "insert_stmt",
                "delete_stmt",
                "update_stmt",
                "select_stmt"
            ], "semi"], "+"
        ],
        create_view_stmt: [
            "CREATE", "temp", "?", "VIEW",
            "if_not_exists", "?", "object_name",
            "AS", "select_stmt"
        ],
        create_virtual_table_stmt: [
            "CREATE", "VIRTUAL", "TABLE", "object_name",
            "USING", "identifier", "parenthesized_column_list", "?"
        ],
        delete_stmt: [
            "DELETE", "FROM", "qualified_table_name",
            "where_clause", "?",
            "order_by_limit_clause", "?"
        ],
        detach_stmt: ["DETACH", "DATABASE", "?", "identifier"],
        drop_index_stmt: ["DROP", "INDEX", "if_exists", "?", "object_name"],
        drop_table_stmt: ["DROP", "TABLE", "if_exists", "?", "object_name"],
        drop_trigger_stmt: ["DROP", "TRIGGER", "if_exists", "?", "object_name"],
        drop_view_stmt: ["DROP", "VIEW", "if_exists", "?", "object_name"],
        insert_stmt: [
            "INSERT", "or_conflict_action", "?",
            "insert_source_and_target"
        ],
        pragma_stmt: ["PRAGMA", "object_name",
            ["|",
                ["equals", "pragma_value"],
                ["lparen", "pragma_value", "rparen"]
            ]
        ],
        reindex_stmt: ["REINDEX", "object_name"],
        release_stmt: ["RELEASE", "SAVEPOINT", "?", "identifier"],
        replace_stmt: ["REPLACE", "insert_source_and_target"],
        rollback_stmt: ["ROLLBACK", "TRANSACTION", "?", ["TO", "SAVEPOINT", "?", "identifier"], "?"],
        savepoint_stmt: ["SAVEPOINT", "identifier"],
        select_stmt: [
            "select_core", ["compound_operator", "select_core"], "*",
            "order_by_clause", "?", "limit_clause", "?"
        ],
        update_stmt: [
            "UPDATE", "or_conflict_action", "?",
            "qualified_table_name",
            "SET", "column_assignments",
            "where_clause", "?",
            "order_by_limit_clause", "?"
        ],
        vacuum_stmt: "VACUUM"
    },
    startSymbol: "sqlite"
};

}())
