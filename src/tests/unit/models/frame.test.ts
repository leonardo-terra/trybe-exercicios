import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Frame from '../../../models/Frame'
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame model', () =>{
  const frameModel = new Frame();
  
  before(()=>{
    Sinon.stub(Model, 'create').resolves(frameMockWithId);
    Sinon.stub(Model, 'findOne').resolves(frameMockWithId);
  })
  after(()=>{
    Sinon.restore();
  })

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

})