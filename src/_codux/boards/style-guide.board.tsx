import '../../styles/common/variables.css';
import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import Classnames from 'classnames';

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
                    <img src="/src/assets/react.svg" />
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
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h1Bold - DM Sans, 700
                        </span>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Normal', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h1Normal - DM Sans, 400
                        </span>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Light', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h1Light - DM Sans, 300
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Subheading / h2</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h2 className={Classnames('h2Bold', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h2Bold - DM Sans, 700
                        </span>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Normal', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h2Normal - DM Sans, 400
                        </span>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Light', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            h2Light - DM Sans, 300
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Body / p</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('pBold', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            pBold - DM Sans, 700
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('pNormal', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            pNormal - DM Sans, 400
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('pLight', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            pLight - DM Sans, 300
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Smaller Text</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('smallBold', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            smallBold - DM Sans, 700
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('smallNormal', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            smallNormal - DM Sans, 400
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('smallLight', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            smallLight - DM Sans, 300
                        </span>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src="/src/assets/react.svg" />
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
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1021,
        canvasHeight: 1656,
        windowHeight: 1659,
    },
});
