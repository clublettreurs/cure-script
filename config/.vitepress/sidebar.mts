import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "/": [
    {
      text: "À propos", 
      collapsed: false,
      items: [
        { text: "Introduction", link: "/about" },
        { text: "Par nunko/dinuz", link: "/original" }
      ]
    },
    {
      text: "Fondamentaux (1-10)",
      collapsed: false, 
      items: [
        { text: "1. Les types de phrases de base", link: "/fr/1-the-basic-types-of-sentences" },
        { text: "2. Le chariot invisible et la particule を", link: "/fr/2-the-invisible-carriage-and-the-を-particle" },
        { text: "3. La particule は", link: "/fr/3-the-は-particle" },
        { text: "4. Les temps des verbes japonais", link: "/fr/4-japanese-verb-tenses" },
        { text: "5. Groupes de verbes et forme て", link: "/fr/5-verb-groups-and-the-て-form" },
        { text: "6. Les adjectifs", link: "/fr/6-adjectives" },
        { text: "7. Conjugaison en 5 étapes", link: "/fr/7-5-conjugation" },
        { text: "7b. Formes négatives et adjectifs au passé", link: "/fr/7-negative-forms-and-adjectives-in-past-tense" },
        { text: "8. Les particules に et へ", link: "/fr/8-the-に-and-へ-particles" },
        { text: "8b. Particules expliquées", link: "/fr/8b-particles-explained" },
        { text: "9. Le sujet et l'expression du désir", link: "/fr/9-the-subject-of-the-japanese-sentence-expressing-desire-ほしい-たい-たがる" },
        { text: "10. Verbes auxiliaires - Le potentiel", link: "/fr/10-helper-verbs-the-potential-helper-verb" }
      ]
    },
    {
      text: "Intermédiaire (11-30)",
      collapsed: true,
      items: [
        { text: "11. Phrases composées - くれる, あげる", link: "/fr/11-compound-sentences-くれる-あげる-and-more-uses-of-the-て-form" },
        { text: "12. Particule de citation と", link: "/fr/12-quotation-particle-と-compound-verbs-nouns" },
        { text: "13. Conjugaison passive", link: "/fr/13-passive-conjugation-receptive-helper-verb" },
        { text: "14. Adverbes et particule も", link: "/fr/14-adverbs-and-the-も-particle" },
        { text: "15. Verbes transitifs/intransitifs", link: "/fr/15-transitive-intransitive-verbs" },
        { text: "16. てみる, particules や et から", link: "/fr/16-てみる-や-particle-から-particle-exclusive-and" },
        { text: "17. Japonais poli et volitif", link: "/fr/17-polite-japanese-and-the-volitional" },
        { text: "18. Mystères de って et は", link: "/fr/18-って-は-mysteries-explained-おうとする-とする-として-という-っていう" },
        { text: "19. Causatif et causatif-réceptif", link: "/fr/19-causative-causative-receptive" },
        { text: "20. Directionnels - それ, その, そんな", link: "/fr/20-directionals-それ-その-そんな-そう-etc" },
        { text: "21. てある, ている, ておく", link: "/fr/21-てある-ている-ておく" },
        { text: "22. ては et ても", link: "/fr/22-ては-ても" },
        { text: "23. だって, だから, それから", link: "/fr/23-だって-だから-それから" },
        { text: "24. Ouï-dire et suppositions", link: "/fr/24-hearsay-guesses-そう-そうだ-そうです" },
        { text: "25. らしい vs そうだ, っぽい", link: "/fr/25-らしい-vs-そうだ-そうです-っぽい-ppoi" },
        { text: "26. Comparaisons - ようだ, みたい", link: "/fr/26-similes-ようだ-のように-のような-みたい" },
        { text: "27. ばかり", link: "/fr/27-ばかり" },
        { text: "28. ように - Clé principale", link: "/fr/28-ように-one-key-to-all-the-main-uses" },
        { text: "29. ことにする, ことになる", link: "/fr/29-ことにする-ことになる" },
        { text: "30. Conditionnels japonais - と", link: "/fr/30-japanese-conditionals-と" }
      ]
    },
    {
      text: "Avancé (31-60)",
      collapsed: true,
      items: [
        { text: "31. Conditionnel ば/れば", link: "/fr/31-the-ば-れば-conditional" },
        { text: "32. Conditionnels たら/なら", link: "/fr/32-the-たら-なら-conditionals" },
        { text: "33. Termes limitatifs", link: "/fr/33-limiting-terms-だけ-しか-ばかり-のみ" },
        { text: "34. Comprendre toute phrase", link: "/fr/34-understand-any-sentence" },
        { text: "35. より, のほう, 一方", link: "/fr/35-より-のほう-一方" },
        { text: "36. 所 - Le concept de lieu", link: "/fr/36-所-the-concept-of-place" },
        { text: "37. Secrets de structure - な vs の", link: "/fr/37-new-structure-secrets-な-vs-の-なる-たる-adjectives" },
        { text: "38. Quand ce n'est pas signifie que c'est", link: "/fr/38-when-it-isn-t-means-it-is-じゃない-ではない" },
        { text: "39. Particule か - Questions enfouies", link: "/fr/39-the-か-particle-buried-questions-かな-もんか-かどうか" },
        { text: "40. 3 pièges en japonais", link: "/fr/40-3-pitfalls-in-japanese-and-how-to-avoid-them" },
        { text: "41. 5 faits clés sur la structure", link: "/fr/41-5-key-facts-about-the-basic-structure-of-japanese" },
        { text: "42. Confusion de mots - まま", link: "/fr/42-basic-word-confusion-まま" },
        { text: "43. Changement de paradigme", link: "/fr/43-paradigm-shift-cut-through-the-confusion" },
        { text: "44. Japonais naturel - ちゃう/ちゃった", link: "/fr/44-how-to-use-natural-japanese-ちゃう-ちゃった" },
        { text: "45. Guide d'auto-immersion", link: "/fr/45-first-step-guide-into-self-immersion-technique" },
        { text: "46. L'ordre des mots compte", link: "/fr/46-word-order-matters-2-simple-rules-to-crack-tough-sentences" },
        { text: "47. Arme secrète pour analyser", link: "/fr/47-how-to-understand-japanese-your-secret-weapon-for-breaking-down-sentences" },
        { text: "48. Gérer l'ambiguïté", link: "/fr/48-dealing-with-ambiguity-in-japanese" },
        { text: "49. Point de vue - もらう/てもらう", link: "/fr/49-japanese-point-of-view-deconfused-もらう-てもらう" },
        { text: "50. させてもらう et le potentiel", link: "/fr/50-2-aspects-of-japanese-that-foreigners-can-t-fathom-させてもらう-last-secret-of-the-potential" },
        { text: "51. Lire une histoire de fantômes", link: "/fr/51-how-to-read-a-japanese-怪談-かいだん-ghost-story" },
        { text: "52. Analyse approfondie de phrases", link: "/fr/52-in-depth-japanese-sentence-analysis-in-real-native-context" },
        { text: "53. Horreur japonaise en japonais", link: "/fr/53-enjoy-japanese-horror-in-japanese" },
        { text: "54. Irrégularités - 見る, 聞く", link: "/fr/54-irregularities-how-they-work-見る-見られる-見れる-見える-聞く-聞ける-聞こえる" },
        { text: "55. Secrets de la particule で", link: "/fr/55-secrets-of-the-で-particle-why-do-we-say-みんなで行く-and-世界で一番" },
        { text: "56. Secrets profonds de は et の", link: "/fr/56-agility-deeper-secrets-of-は-and-の-particles" },
        { text: "57. 込む et mots multi-sens", link: "/fr/57-込む-komu-and-the-secret-of-multi-meaning-japanese-words" },
        { text: "58. Particules doubles", link: "/fr/58-japanese-double-particles-how-they-work" },
        { text: "59. Japonais intraduisible", link: "/fr/59-untranslatable-japanese-exists-how-to-understand-it" },
        { text: "60. Structure topic-commentaire", link: "/fr/60-the-other-half-of-japanese-structure-non-logical-topic-comment-structure" }
      ]
    },
    {
      text: "Expert (61-97)",
      collapsed: true,
      items: [
        { text: "61. は et が - Secrets profonds", link: "/fr/61-は-and-が-the-deeper-secrets-the-yin-yang-structure-of-japanese" },
        { text: "62. ておく vs てしまう", link: "/fr/62-ておく-vs-てしまう-helper-verb-secrets" },
        { text: "63. Terminaisons de phrases sauvages", link: "/fr/63-wild-sentence-enders-in-real-life-japanese-かい-だい-ぜ-ぞ-さ-から-し-ちょうだい" },
        { text: "64. もの et こと avancés", link: "/fr/64-things-get-strange-もの-and-こと-advanced-secrets-ものだ-ことがある-こと-as-sentence-ender" },
        { text: "65. Aller et venir - 行く/来る", link: "/fr/65-coming-and-going-deeper-secrets-of-行く-and-来る-て行くand-て来る-te-iku-te-kuru" },
        { text: "66. Sujets cachés", link: "/fr/66-hidden-subjects-in-japanese-and-how-to-understand-them" },
        { text: "67. もう et まだ", link: "/fr/67-もう-and-まだ-the-time-relations-that-make-sense-of-them" },
        { text: "68. Logique sous-jacente - わけ", link: "/fr/68-japanese-underlying-logic-わけ-そういうわけ-わけが分からない-わけない" },
        { text: "69. Japonais sauvage - 怪談 4", link: "/fr/69-japanese-in-the-wild-tackling-native-japanese-material-怪談-4" },
        { text: "70. かける/かかる polyvalents", link: "/fr/70-かける-かかる-all-purpose-japanese-explained" },
        { text: "71. Compteurs japonais", link: "/fr/71-japanese-counters-3-simple-rules" },
        { text: "72. Connecteur い-stem", link: "/fr/72-the-great-connector-い-stem-magic" },
        { text: "73. Secrets de 気", link: "/fr/73-secrets-of-気-気になる-気にする-気がする-気に入る-etc" },
        { text: "74. Amour et mystères de こと", link: "/fr/74-love-and-other-mysteries-of-こと-あなたのことが好き-私のことが嫌い-ということ-そういうこと-どういうこと-そんなこと" },
        { text: "75. Le japonais n'est pas l'anglais", link: "/fr/75-japanese-is-not-english-how-expression-strategies-differ-polite-英本語-rude-japanese" },
        { text: "76. La bonne ouverture", link: "/fr/76-the-right-opening-あく-あける-ひらく-ひらける-開く-開け" },
        { text: "77. Structure vs Tae Kim", link: "/fr/77-real-japanese-structure-vs-tae-kim-structural-review-of-tae-kim-s-japanese-grammar" },
        { text: "78. Tae Kim vs la copule", link: "/fr/78-breaking-the-core-tae-kim-vs-the-copula-japanese-structure-based-critical-review" },
        { text: "79. Secret profond de la copule", link: "/fr/79-deeper-secret-of-the-copula" },
        { text: "80. Particules omises", link: "/fr/80-dropped-particles-casual-omissions" },
        { text: "81. Principe global des formes", link: "/fr/81-global-principle-of-all-japanese-word-forms" },
        { text: "82. なんて, なんか, など", link: "/fr/82-なんて-なんか-など-3-common-words-clarified" },
        { text: "83. Trois niveaux de commande", link: "/fr/83-three-levels-of-command-in-japanese-て-form-commands-なさい-な-commands-imperative-form" },
        { text: "84. である et structure", link: "/fr/84-である-and-the-structure-of-japanese-what-older-copulas-tell-us-である-であります-でござる-でございます" },
        { text: "85. まい - L'auxiliaire négatif", link: "/fr/85-まい-the-negative-helper" },
        { text: "86. 次第 - shidai", link: "/fr/86-次第-shidai" },
        { text: "87. Structure inversée - しか", link: "/fr/87-japanese-structure-inverted-strange-life-of-しか" },
        { text: "88. xをしたい vs xがしたい", link: "/fr/88-xをしたい-vs-xがしたい" },
        { text: "89. Démystifier - Le sujet universel", link: "/fr/89-de-mystifying-japanese-the-universal-subject" },
        { text: "90. Ponctuation japonaise", link: "/fr/90-japanese-punctuation-how-it-works" },
        { text: "91. Limites extérieures - 限る/限り", link: "/fr/91-outer-limits-限る-限り-its-many-meanings-and-how-they-work-知っている限り-とは限らない-and-more" },
        { text: "92. L'anglais va-t-il manger le japonais ?", link: "/fr/92-will-english-eat-japanese-loan-word-invasion-is-it-really-a-threat" },
        { text: "93. Insulter avec くせに", link: "/fr/93-cussin-em-out-with-くせに-how-it-works" },
        { text: "94. くらい vs ほど", link: "/fr/94-くらい-vs-ほど" },
        { text: "95. Histoire des mots - どうも, やっぱり", link: "/fr/95-using-word-history-the-smart-way-どうも-やっぱり-やはり" },
        { text: "96. 通り et せっかく", link: "/fr/96-通り-and-せっかく-a-metaphorical-road-and-an-untranslatable-word" },
        { text: "97. Significations de うち", link: "/fr/97-the-meanings-of-うち-home-self-social-boundary-time-marker-いまのうち-そのうち" }
      ]
    }
  ]
};
