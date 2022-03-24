import sponsors from './SponsorData';
import Navigation from '@components/Navigation';
const Card = (props) => {
    return (
        <div className="flex justify-center flex-col mt-10 m-2">
            <div className="flex justify-center text-center ml-auto mr-auto">{props.sponsor.title}</div>
            <div className="flex justify-center sponsors-img">
                <img src={props.sponsor.image} alt="" />
            </div>
        </div>
    );
};

const Sponsor = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Navigation />
            <div className="sponsors-container" style={{ paddingTop: '10rem' }}>
                <div className="m-auto w-4/5 flex-row">
                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.iocl} />
                    </div>
                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.mcj} />
                    </div>
                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.oil} />
                    </div>

                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.parx} />
                    </div>
                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.pt} />
                    </div>
                    <div className="flex justify-center w-full">
                        <Card sponsor={sponsors.at} />
                    </div>
                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.gp} />
                    </div>
                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.sbi} />
                        <Card sponsor={sponsors.amazonpay} />
                    </div>

                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.parxhunt} />
                    </div>
                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.ntpc} />
                        <Card sponsor={sponsors.nhai} />
                    </div>
                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.canara} />
                        <Card sponsor={sponsors.asffdc} />
                        <Card sponsor={sponsors.nhm} />
                    </div>
                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.beatbreakers} />
                        <Card sponsor={sponsors.astc} />
                        <Card sponsor={sponsors.nerim} />
                    </div>
                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.asacs} />
                        <Card sponsor={sponsors.safeexpress} />
                        <Card sponsor={sponsors.icici} />
                    </div>
                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.eduversity} />

                        <Card sponsor={sponsors.allen} />
                    </div>
                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.pcba} />
                        <Card sponsor={sponsors.innovation} />
                        <Card sponsor={sponsors.vruksha} />
                    </div>

                    <div className="flex justify-center w-full md:flex-row flex-col">
                        <Card sponsor={sponsors.hostgator} />
                        <Card sponsor={sponsors.internshala} />
                        <Card sponsor={sponsors.tubelight} />
                    </div>
                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.growfitter} />
                        <Card sponsor={sponsors.bharatstationeries} />

                        <Card sponsor={sponsors.yourmerchandise} />
                    </div>
                    <div className="flex justify-center w-full  md:flex-row flex-col">
                        <Card sponsor={sponsors.ihoik} />
                        <Card sponsor={sponsors.echoofarunachal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
