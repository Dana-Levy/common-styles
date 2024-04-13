import '../../styles/common/variables.css';
import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import Classnames from 'classnames';
import SectionSvg from '../../assets/section.svg';

export default createBoard({
    name: 'StyleGuide',
    Board: () => (
        <div className={Classnames(StyleGuide_board_module.root)}>
            <div className={StyleGuide_board_module.pageHeader}>
                <h1 className={StyleGuide_board_module.TitleHeader}>Style Guide</h1>
                <span className={StyleGuide_board_module.logo}>LOGO</span>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Typography</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Defines the fonts used for headings, body text, labels, etc., including size,
                    weight, and spacing.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Font Family</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span className={Classnames('pNormal')}>DM Sans</span>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Main Heading / h1</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h1 className={Classnames('h1Bold', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Bold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Normal', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Normal <br /> DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Light', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Light <br /> DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Subheading / h2</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h2 className={Classnames('h2Bold', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Bold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Normal', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Normal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Light', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Light <br /> DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Body / p</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('pBold', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pBold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('pNormal', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pNormal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('pLight', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pLight
                            <br />
                            DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Smaller Text</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('smallBold', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallBold
                            <br />
                            DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('smallNormal', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallNormal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('smallLight', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallLight
                            <br />
                            DM Sans, 300
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Colors</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Colors are a powerful tool in design for communicating meaning and influencing
                    user perception. Here&apos;s colors can contribute to the success of your design
                    by conveying specific
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Primary / Blue</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'b10')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            b10
                            <br />
                            #F0F5FF
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'b20')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            b20
                            <br />
                            #2F6FED
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'b30')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            b30
                            <br />
                            #1D5BD6
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'b40')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            b40
                            <br />
                            #1E4EAE{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Secondary / Dark</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'd10')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            d10
                            <br />
                            #E0E0E8
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'd12')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            d20
                            <br /> #AFAFB6
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'd30')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            d30
                            <br />
                            #808087
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'd40')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            d40
                            <br />
                            #2B2B31{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Warning </h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'w10')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            w10
                            <br />
                            #FEF4E9
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'w20')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            w20
                            <br />
                            #FCD0A0
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'w30')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            w30
                            <br />
                            ##FABF7A
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'w40')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            w40
                            <br />
                            #2B2B31{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'w50')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            w40
                            <br />
                            #AA661E{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Error</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'e10')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            e10
                            <br />
                            #feecec
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'e20')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            e20
                            <br />
                            #fab2af
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'e30')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            e30
                            <br />
                            #f26561
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'e40')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            e40
                            <br />
                            #ec6d69{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'e50')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            e40
                            <br />
                            #a5302c{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Success</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 's10')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            s0
                            <br />
                            #E8F8F1
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 's20')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            s20
                            <br />
                            #9FE1C2
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 's30')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            s30
                            <br />
                            #76D6AB
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 's40')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            s40
                            <br />
                            #76D6AB{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 's50')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            s50
                            <br />
                            #0F804E{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Spacing</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Colors are a powerful tool in design for communicating meaning and influencing
                    user perception. Here&apos;s colors can contribute to the success of your design
                    by conveying specific
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Margin</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing2',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing4',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing6',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing8',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing12',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing16',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing24',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing32',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing40',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Padding</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing2',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing4',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing6',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    'spacing8',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing12',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing16',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing24',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing32',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.spacingContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'spacing40',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            spacing12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1021,
        canvasHeight: 1576,
        windowHeight: 1659,
    },
});
